import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ToastController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { AuthStateService } from 'src/app/services/auth/auth-state.service';
import {
  PUSH_OPTIN_SNOOZE_MS,
  PushNotificationsService,
  PushPermissionState,
  shouldShowPushOptin,
} from 'src/app/services/push/push-notifications.service';
import { PushOptinBannerComponent } from './push-optin-banner.component';

describe('shouldShowPushOptin', () => {
  const now = 1_800_000_000_000;
  const base = {
    available: true,
    loggedIn: true,
    permission: 'prompt' as PushPermissionState,
    dismissedAt: null as number | null,
    now,
  };

  it('shows on native, logged in, never asked, not snoozed', () => {
    expect(shouldShowPushOptin(base)).toBeTrue();
    expect(shouldShowPushOptin({ ...base, permission: 'prompt-with-rationale' })).toBeTrue();
  });

  it('hides on web / without Firebase, or when logged out', () => {
    expect(shouldShowPushOptin({ ...base, available: false })).toBeFalse();
    expect(shouldShowPushOptin({ ...base, loggedIn: false })).toBeFalse();
  });

  it('hides once granted or denied (denied is explained in the profile)', () => {
    expect(shouldShowPushOptin({ ...base, permission: 'granted' })).toBeFalse();
    expect(shouldShowPushOptin({ ...base, permission: 'denied' })).toBeFalse();
    expect(shouldShowPushOptin({ ...base, permission: 'unsupported' })).toBeFalse();
  });

  it('stays hidden for 7 days after "Plus tard"', () => {
    expect(shouldShowPushOptin({ ...base, dismissedAt: now - 1000 })).toBeFalse();
    expect(
      shouldShowPushOptin({ ...base, dismissedAt: now - PUSH_OPTIN_SNOOZE_MS + 1 }),
    ).toBeFalse();
    expect(
      shouldShowPushOptin({ ...base, dismissedAt: now - PUSH_OPTIN_SNOOZE_MS - 1 }),
    ).toBeTrue();
  });
});

describe('PushOptinBannerComponent', () => {
  let fixture: ComponentFixture<PushOptinBannerComponent>;
  let permission$: BehaviorSubject<PushPermissionState>;
  let push: jasmine.SpyObj<PushNotificationsService>;

  async function setup(available: boolean, dismissedAt: number | null = null) {
    permission$ = new BehaviorSubject<PushPermissionState>('prompt');
    push = jasmine.createSpyObj<PushNotificationsService>(
      'PushNotificationsService',
      ['init', 'getOptinDismissedAt', 'dismissOptin', 'refreshPermission', 'requestAndEnable'],
      { isAvailable: available, permission$: permission$.asObservable() },
    );
    push.init.and.resolveTo();
    push.getOptinDismissedAt.and.resolveTo(dismissedAt);
    push.dismissOptin.and.resolveTo();
    push.refreshPermission.and.resolveTo('prompt');
    push.requestAndEnable.and.callFake(async () => {
      permission$.next('granted');
      return 'granted';
    });

    await TestBed.configureTestingModule({
      imports: [PushOptinBannerComponent, IonicModule.forRoot(), TranslateModule.forRoot()],
      providers: [
        { provide: PushNotificationsService, useValue: push },
        { provide: AuthStateService, useValue: { isLoggedIn$: new BehaviorSubject(true) } },
        {
          provide: ToastController,
          useValue: { create: () => Promise.resolve({ present: () => Promise.resolve() }) },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(PushOptinBannerComponent);
    fixture.detectChanges(); // ngOnInit (asynchrone)
    await fixture.whenStable();
    fixture.detectChanges();
  }

  const banner = () => fixture.nativeElement.querySelector('.banner');

  it('is never shown on the web', async () => {
    await setup(false);
    expect(fixture.componentInstance.visible).toBeFalse();
    expect(banner()).toBeNull();
  });

  it('shows, then hides and stores the snooze on "Plus tard"', async () => {
    await setup(true);
    expect(banner()).not.toBeNull();

    await fixture.componentInstance.later();
    fixture.detectChanges();
    expect(push.dismissOptin).toHaveBeenCalled();
    expect(banner()).toBeNull();
  });

  it('stays hidden when snoozed recently', async () => {
    await setup(true, Date.now() - 60_000);
    expect(banner()).toBeNull();
  });

  it('"Activer" asks the OS only on click and hides once granted', async () => {
    await setup(true);
    expect(push.requestAndEnable).not.toHaveBeenCalled();
    await fixture.componentInstance.enable();
    fixture.detectChanges();
    expect(push.requestAndEnable).toHaveBeenCalledTimes(1);
    expect(banner()).toBeNull();
  });
});
