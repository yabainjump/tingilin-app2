import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BYPASS_AUTH_INTERCEPTOR } from '../auth/auth.interceptor';
import { AuthService } from '../auth/auth.service';
import { AuthStateService, MeDto } from '../auth/auth-state.service';
import { NotificationsStateService } from '../notifications/notifications-state.service';
import { PUSH_PLATFORM, PushPlatform } from './push-platform';
import {
  PUSH_OPTIN_DISMISS_KEY,
  PushNotificationsService,
} from './push-notifications.service';

type Listener = (payload: any) => void;

class FakePushPlatform {
  native = true;
  configured = true;
  permission = 'prompt';
  permissionAfterRequest = 'granted';
  listeners: Record<string, Listener> = {};
  store = new Map<string, string>();
  resume: (() => void) | null = null;

  push = {
    checkPermissions: jasmine
      .createSpy('checkPermissions')
      .and.callFake(async () => ({ receive: this.permission })),
    requestPermissions: jasmine.createSpy('requestPermissions').and.callFake(async () => {
      this.permission = this.permissionAfterRequest;
      return { receive: this.permission };
    }),
    register: jasmine.createSpy('register').and.resolveTo(),
    unregister: jasmine.createSpy('unregister').and.resolveTo(),
    createChannel: jasmine.createSpy('createChannel').and.resolveTo(),
    addListener: jasmine
      .createSpy('addListener')
      .and.callFake(async (name: string, fn: Listener) => {
        this.listeners[name] = fn;
        return { remove: async () => undefined };
      }),
  };

  asPlatform(): PushPlatform {
    return {
      isNative: () => this.native,
      platform: () => (this.native ? 'android' : 'web'),
      isConfigured: async () => this.configured,
      onResume: (cb) => {
        this.resume = cb;
      },
      push: this.push as unknown as PushPlatform['push'],
      prefs: {
        get: async (k) => this.store.get(k) ?? null,
        set: async (k, v) => {
          this.store.set(k, v);
        },
      },
    };
  }
}

const flush = () => new Promise<void>((resolve) => setTimeout(resolve, 0));
const TOKEN = 'fcm-token:' + 'A'.repeat(40);
const ACCESS = 'aaa.bbb.ccc';
const userA: MeDto = { id: 'user-a', email: 'a@example.com', role: 'USER' };
const userB: MeDto = { id: 'user-b', email: 'b@example.com', role: 'USER' };

describe('PushNotificationsService', () => {
  let fake: FakePushPlatform;
  let service: PushNotificationsService;
  let http: HttpTestingController;
  let auth: AuthService;
  let me$: BehaviorSubject<MeDto | null>;
  let router: Router;
  let toast: jasmine.SpyObj<ToastController>;
  const devicesUrl = `${environment.apiBaseUrl}/notifications/devices`;
  const unregisterUrl = `${environment.apiBaseUrl}/notifications/devices/unregister`;

  beforeEach(() => {
    fake = new FakePushPlatform();
    me$ = new BehaviorSubject<MeDto | null>(null);
    toast = jasmine.createSpyObj<ToastController>('ToastController', ['create']);
    toast.create.and.resolveTo({ present: () => Promise.resolve() } as any);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, TranslateModule.forRoot()],
      providers: [
        { provide: PUSH_PLATFORM, useFactory: () => fake.asPlatform() },
        { provide: AuthStateService, useValue: { me$: me$.asObservable() } },
        { provide: NotificationsStateService, useValue: { refresh: () => Promise.resolve() } },
        { provide: ToastController, useValue: toast },
      ],
    });
    service = TestBed.inject(PushNotificationsService);
    http = TestBed.inject(HttpTestingController);
    auth = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    spyOn(auth, 'isLoggedIn').and.callFake(() => me$.value !== null);
    spyOn(auth, 'getAccessToken').and.callFake(() => (me$.value ? ACCESS : null));
  });

  afterEach(() => {
    http.match(`${environment.apiBaseUrl}/auth/logout`); // hors sujet ici
    http.verify();
  });

  async function loginAs(user: MeDto | null): Promise<void> {
    me$.next(user);
    await flush();
  }

  function emitToken(value = TOKEN): void {
    fake.listeners['registration']({ value });
  }

  it('is a no-op on the web platform', async () => {
    fake.native = false;
    await service.init();
    await loginAs(userA);

    expect(service.isAvailable).toBeFalse();
    expect(fake.push.addListener).not.toHaveBeenCalled();
    expect(fake.push.checkPermissions).not.toHaveBeenCalled();
    expect(fake.push.register).not.toHaveBeenCalled();
    await expectAsync(service.requestAndEnable()).toBeResolvedTo('unsupported');
    expect(fake.push.requestPermissions).not.toHaveBeenCalled();
  });

  it('stays disabled when Firebase is not configured in the native build', async () => {
    fake.configured = false;
    fake.permission = 'granted';
    await service.init();
    await loginAs(userA);

    expect(service.isAvailable).toBeFalse();
    expect(fake.push.register).not.toHaveBeenCalled();
    expect(fake.push.addListener).not.toHaveBeenCalled();
  });

  it('creates the high-importance channel and the four listeners', async () => {
    await service.init();
    expect(fake.push.createChannel).toHaveBeenCalledOnceWith(
      jasmine.objectContaining({ id: 'tinguilin_default', importance: 4, visibility: 1 }),
    );
    expect(Object.keys(fake.listeners).sort()).toEqual([
      'pushNotificationActionPerformed',
      'pushNotificationReceived',
      'registration',
      'registrationError',
    ]);
  });

  it('never triggers the OS prompt on login when permission is still "prompt"', async () => {
    fake.permission = 'prompt';
    await service.init();
    await loginAs(userA);

    expect(fake.push.requestPermissions).not.toHaveBeenCalled();
    expect(fake.push.register).not.toHaveBeenCalled();
    expect(service.permission).toBe('prompt');
  });

  it('registers and posts the token when permission is already granted', async () => {
    fake.permission = 'granted';
    await service.init();
    await loginAs(userA);
    expect(fake.push.register).toHaveBeenCalledTimes(1);

    emitToken();
    const req = http.expectOne(devicesUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ token: TOKEN, platform: 'android' });
    req.flush(null, { status: 204, statusText: 'No Content' });

    // Meme token, meme compte: pas de doublon.
    emitToken();
    http.expectNone(devicesUrl);
  });

  it('does not post a token while logged out, nor an invalid token', async () => {
    fake.permission = 'granted';
    await service.init();
    emitToken();
    http.expectNone(devicesUrl);

    await loginAs(userA);
    emitToken('bad token');
    http.expectNone(devicesUrl);
  });

  it('re-registers the token for the new account when switching accounts', async () => {
    fake.permission = 'granted';
    await service.init();
    await loginAs(userA);
    emitToken();
    http.expectOne(devicesUrl).flush(null);

    await loginAs(null); // sessionReset
    await loginAs(userB);
    expect(fake.push.register).toHaveBeenCalledTimes(2);
    emitToken();
    const req = http.expectOne(devicesUrl);
    expect(req.request.body.token).toBe(TOKEN);
    req.flush(null);
  });

  it('unregisters the token with the still-valid access token BEFORE tokens are cleared', async () => {
    fake.permission = 'granted';
    await service.init();
    await loginAs(userA);
    emitToken();
    http.expectOne(devicesUrl).flush(null);

    let pendingAtClear = 0;
    let nativeUnregisterAtClear = 0;
    spyOn(auth, 'clearTokens').and.callFake(() => {
      const reqs = http.match(unregisterUrl);
      pendingAtClear = reqs.length;
      nativeUnregisterAtClear = fake.push.unregister.calls.count();
      for (const r of reqs) {
        expect(r.request.body).toEqual({ token: TOKEN });
        expect(r.request.headers.get('Authorization')).toBe(`Bearer ${ACCESS}`);
        expect(r.request.context.get(BYPASS_AUTH_INTERCEPTOR)).toBeTrue();
        r.flush(null);
      }
    });

    auth.logout();
    expect(pendingAtClear).toBe(1);
    expect(nativeUnregisterAtClear).toBe(1);
  });

  it('never blocks or breaks logout when offline / native unregister fails', async () => {
    fake.permission = 'granted';
    fake.push.unregister.and.rejectWith(new Error('offline'));
    await service.init();
    await loginAs(userA);
    emitToken();
    http.expectOne(devicesUrl).flush(null);
    const clear = spyOn(auth, 'clearTokens').and.callThrough();

    expect(() => auth.logout()).not.toThrow();
    expect(clear).toHaveBeenCalled();
    http
      .expectOne(unregisterUrl)
      .error(new ProgressEvent('error'), { status: 0, statusText: 'offline' });
    await flush();
  });

  it('requestAndEnable prompts, then registers when granted', async () => {
    fake.permission = 'prompt';
    fake.permissionAfterRequest = 'granted';
    await service.init();
    await loginAs(userA);

    await expectAsync(service.requestAndEnable()).toBeResolvedTo('granted');
    expect(fake.push.requestPermissions).toHaveBeenCalledTimes(1);
    expect(fake.push.register).toHaveBeenCalledTimes(1);
    expect(service.permission).toBe('granted');
  });

  it('requestAndEnable reports a refusal without registering', async () => {
    fake.permission = 'prompt';
    fake.permissionAfterRequest = 'denied';
    await service.init();

    await expectAsync(service.requestAndEnable()).toBeResolvedTo('denied');
    expect(fake.push.register).not.toHaveBeenCalled();
  });

  it('navigates only to safe deep links when a notification is tapped', async () => {
    await service.init();
    (router as any).navigated = true;
    const nav = spyOn(router, 'navigateByUrl').and.resolveTo(true);

    fake.listeners['pushNotificationActionPerformed']({
      actionId: 'tap',
      notification: { data: { deepLink: '/tabs/raffle-details/abc123' } },
    });
    await flush();
    expect(nav).toHaveBeenCalledWith('/tabs/raffle-details/abc123');

    nav.calls.reset();
    fake.listeners['pushNotificationActionPerformed']({
      actionId: 'tap',
      notification: { data: { deepLink: 'javascript:alert(1)' } },
    });
    await flush();
    expect(nav).toHaveBeenCalledOnceWith('/tabs/notifications');
  });

  it('shows a toast for foreground notifications', async () => {
    await service.init();
    fake.listeners['pushNotificationReceived']({
      title: 'Tirage dans 10 min',
      body: 'PS5',
      data: { deepLink: '//evil' },
    });
    await flush();
    expect(toast.create).toHaveBeenCalledWith(
      jasmine.objectContaining({ header: 'Tirage dans 10 min', message: 'PS5' }),
    );
  });

  it('registers when permission was granted from Android settings (app resume)', async () => {
    fake.permission = 'denied';
    await service.init();
    await loginAs(userA);
    expect(fake.push.register).not.toHaveBeenCalled();

    fake.permission = 'granted';
    fake.resume?.();
    await flush();
    expect(service.permission).toBe('granted');
    expect(fake.push.register).toHaveBeenCalledTimes(1);
    expect(fake.push.requestPermissions).not.toHaveBeenCalled();
  });

  it('persists the opt-in dismissal timestamp in Preferences', async () => {
    await service.dismissOptin(1234);
    expect(fake.store.get(PUSH_OPTIN_DISMISS_KEY)).toBe('1234');
    await expectAsync(service.getOptinDismissedAt()).toBeResolvedTo(1234);
  });
});
