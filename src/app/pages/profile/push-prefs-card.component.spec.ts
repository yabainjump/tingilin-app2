import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ToastController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { AuthStateService, MeDto } from 'src/app/services/auth/auth-state.service';
import {
  PushNotificationsService,
  PushPermissionState,
} from 'src/app/services/push/push-notifications.service';
import { PushPrefsCardComponent } from './push-prefs-card.component';

describe('PushPrefsCardComponent', () => {
  let fixture: ComponentFixture<PushPrefsCardComponent>;
  let component: PushPrefsCardComponent;
  let me$: BehaviorSubject<MeDto | null>;
  let authState: { me$: any; ensureCurrentUser: jasmine.Spy; updatePushPrefs: jasmine.Spy };
  let toastCreate: jasmine.Spy;
  let permission$: BehaviorSubject<PushPermissionState>;

  async function setup(native = false, permission: PushPermissionState = 'unsupported') {
    me$ = new BehaviorSubject<MeDto | null>({
      id: 'u1',
      email: 'u@example.com',
      role: 'USER',
      pushPrefs: { reminders: true, newRaffles: false },
    });
    authState = {
      me$: me$.asObservable(),
      ensureCurrentUser: jasmine.createSpy('ensureCurrentUser').and.returnValue(of(null)),
      updatePushPrefs: jasmine.createSpy('updatePushPrefs'),
    };
    permission$ = new BehaviorSubject<PushPermissionState>(permission);
    const push = {
      init: () => Promise.resolve(),
      isAvailable: native,
      permission$: permission$.asObservable(),
      refreshPermission: () => Promise.resolve(permission),
      requestAndEnable: jasmine.createSpy('requestAndEnable').and.resolveTo('granted'),
    };
    toastCreate = jasmine
      .createSpy('create')
      .and.resolveTo({ present: () => Promise.resolve() });

    await TestBed.configureTestingModule({
      imports: [PushPrefsCardComponent, IonicModule.forRoot(), TranslateModule.forRoot()],
      providers: [
        { provide: AuthStateService, useValue: authState },
        { provide: PushNotificationsService, useValue: push },
        { provide: ToastController, useValue: { create: toastCreate } },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(PushPrefsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await component.refresh();
    fixture.detectChanges();
  }

  it('binds the toggles to pushPrefs from /auth/me', async () => {
    await setup();
    expect(component.prefs).toEqual({ reminders: true, newRaffles: false });
  });

  it('saves optimistically', async () => {
    await setup();
    authState.updatePushPrefs.and.returnValue(of({ reminders: false, newRaffles: false }));
    await component.toggle('reminders', false);
    expect(authState.updatePushPrefs).toHaveBeenCalledOnceWith({ reminders: false });
    expect(component.prefs.reminders).toBeFalse();
    expect(toastCreate).not.toHaveBeenCalled();
  });

  it('rolls back and shows a toast when saving fails', async () => {
    await setup();
    authState.updatePushPrefs.and.returnValue(throwError(() => new Error('500')));
    await component.toggle('newRaffles', true);
    expect(component.prefs.newRaffles).toBeFalse();
    expect(component.saving.newRaffles).toBeFalse();
    expect(toastCreate).toHaveBeenCalledWith(
      jasmine.objectContaining({ message: 'PROFILE_NOTIFICATIONS.SAVE_FAILED' }),
    );
  });

  it('hides the OS permission section on the web', async () => {
    await setup(false);
    expect(fixture.nativeElement.querySelector('.perm')).toBeNull();
  });

  it('shows the enable button when not yet granted on native', async () => {
    await setup(true, 'prompt');
    expect(fixture.nativeElement.querySelector('.enable')).not.toBeNull();
  });

  it('explains Android settings instead of a button when denied', async () => {
    await setup(true, 'denied');
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.enable')).toBeNull();
    expect(el.textContent).toContain('PROFILE_NOTIFICATIONS.DENIED_HELP');
  });
});
