import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import type {
  ActionPerformed,
  PushNotificationSchema,
  Token,
} from '@capacitor/push-notifications';
import {
  BehaviorSubject,
  distinctUntilChanged,
  filter,
  firstValueFrom,
  map,
  merge,
  timer,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { BYPASS_AUTH_INTERCEPTOR } from '../auth/auth.interceptor';
import { AuthService, PreLogoutContext } from '../auth/auth.service';
import { AuthStateService, MeDto } from '../auth/auth-state.service';
import { NotificationsStateService } from '../notifications/notifications-state.service';
import { isValidPushToken, safePushRoute } from './push-deep-link';
import { PUSH_PLATFORM, PushPlatform } from './push-platform';

/** Etat de l'autorisation OS, 'unsupported' = web ou Firebase non configure. */
export type PushPermissionState =
  | 'granted'
  | 'denied'
  | 'prompt'
  | 'prompt-with-rationale'
  | 'unsupported';

export type PushEnableOutcome = 'granted' | 'denied' | 'unsupported' | 'error';

export const PUSH_CHANNEL_ID = 'tinguilin_default';
export const PUSH_OPTIN_DISMISS_KEY = 'tinguilin_push_optin_dismissed_at';
export const PUSH_OPTIN_SNOOZE_MS = 7 * 24 * 60 * 60 * 1000;

const ROUTER_READY_TIMEOUT_MS = 8000;

export function normalizePermission(value: unknown): PushPermissionState {
  return value === 'granted' ||
    value === 'denied' ||
    value === 'prompt' ||
    value === 'prompt-with-rationale'
    ? value
    : 'unsupported';
}

/** Bandeau d'opt-in: natif + Firebase dispo, connecte, jamais demande, pas reporte < 7 j. */
export function shouldShowPushOptin(input: {
  available: boolean;
  loggedIn: boolean;
  permission: PushPermissionState;
  dismissedAt: number | null;
  now: number;
}): boolean {
  if (!input.available || !input.loggedIn) return false;
  if (input.permission !== 'prompt' && input.permission !== 'prompt-with-rationale') {
    return false;
  }
  const at = input.dismissedAt;
  if (at !== null && Number.isFinite(at) && input.now - at < PUSH_OPTIN_SNOOZE_MS) {
    return false;
  }
  return true;
}

function userKeyOf(me: MeDto | null): string | null {
  if (!me) return null;
  return String(me.id ?? me._id ?? me.email ?? '') || null;
}

function shortText(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

/**
 * Notifications push FCM (Android natif uniquement).
 * - Ne declenche JAMAIS le prompt OS tout seul: seulement via requestAndEnable().
 * - Le token n'est envoye a l'API que pour un utilisateur connecte, et
 *   desinscrit (serveur + FCM) avant l'effacement des jetons au logout.
 * - Les deepLinks recus sont filtres (safePushRoute) avant toute navigation.
 */
@Injectable({ providedIn: 'root' })
export class PushNotificationsService {
  private readonly baseUrl = environment.apiBaseUrl;
  private readonly permissionSubject = new BehaviorSubject<PushPermissionState>('unsupported');
  readonly permission$ = this.permissionSubject.asObservable();

  private initPromise: Promise<void> | null = null;
  private available = false;
  /** Token FCM courant (memoire uniquement). */
  private token: string | null = null;
  private currentUserKey: string | null = null;
  /** Dernier couple (utilisateur, token) envoye a l'API, pour eviter les doublons. */
  private postedFor: { userKey: string; token: string } | null = null;

  constructor(
    @Inject(PUSH_PLATFORM) private readonly platform: PushPlatform,
    private readonly http: HttpClient,
    private readonly auth: AuthService,
    private readonly authState: AuthStateService,
    private readonly notificationsState: NotificationsStateService,
    private readonly router: Router,
    private readonly zone: NgZone,
    private readonly toast: ToastController,
    private readonly translate: TranslateService,
  ) {}

  /** true sur Android natif avec Firebase configure (apres init()). */
  get isAvailable(): boolean {
    return this.available;
  }

  get permission(): PushPermissionState {
    return this.permissionSubject.value;
  }

  /** Idempotent. A appeler une fois au demarrage de l'app. */
  init(): Promise<void> {
    if (!this.initPromise) {
      this.initPromise = this.doInit().catch(() => {
        console.warn('[push] init failed');
      });
    }
    return this.initPromise;
  }

  /**
   * Relit l'autorisation OS (l'utilisateur a pu la changer dans les Parametres
   * Android) et, si elle vient d'etre accordee, enregistre l'appareil.
   */
  async refreshPermission(): Promise<PushPermissionState> {
    const state = await this.checkPermission();
    if (state === 'granted' && this.currentUserKey && !this.token) {
      await this.safeRegister();
    }
    return state;
  }

  private async checkPermission(): Promise<PushPermissionState> {
    if (!this.available) {
      this.permissionSubject.next('unsupported');
      return 'unsupported';
    }
    try {
      const res = await this.platform.push.checkPermissions();
      const state = normalizePermission(res?.receive);
      this.permissionSubject.next(state);
      return state;
    } catch {
      this.permissionSubject.next('unsupported');
      return 'unsupported';
    }
  }

  /** Action explicite de l'utilisateur: prompt OS (Android 13+) puis enregistrement. */
  async requestAndEnable(): Promise<PushEnableOutcome> {
    await this.init();
    if (!this.available) return 'unsupported';
    try {
      let state = await this.checkPermission();
      if (state === 'prompt' || state === 'prompt-with-rationale') {
        const res = await this.platform.push.requestPermissions();
        state = normalizePermission(res?.receive);
        this.permissionSubject.next(state);
      }
      if (state !== 'granted') return state === 'unsupported' ? 'unsupported' : 'denied';
      await this.platform.push.register();
      return 'granted';
    } catch {
      console.warn('[push] enable failed');
      return 'error';
    }
  }

  async getOptinDismissedAt(): Promise<number | null> {
    try {
      const raw = await this.platform.prefs.get(PUSH_OPTIN_DISMISS_KEY);
      const at = Number(raw);
      return raw && Number.isFinite(at) && at > 0 ? at : null;
    } catch {
      return null;
    }
  }

  async dismissOptin(now = Date.now()): Promise<void> {
    try {
      await this.platform.prefs.set(PUSH_OPTIN_DISMISS_KEY, String(now));
    } catch {
      // Pas grave: le bandeau reviendra simplement plus tot.
    }
  }

  private async doInit(): Promise<void> {
    if (!this.platform.isNative()) return;
    this.available = await this.platform.isConfigured().catch(() => false);
    if (!this.available) {
      this.permissionSubject.next('unsupported');
      return;
    }

    try {
      await this.platform.push.createChannel({
        id: PUSH_CHANNEL_ID,
        name: 'Tinguilin',
        importance: 4, // IMPORTANCE_HIGH
        visibility: 1, // VISIBILITY_PUBLIC
        sound: 'default',
      });
    } catch {
      console.warn('[push] channel creation failed');
    }

    // Les callbacks natifs arrivent hors zone Angular.
    await this.platform.push.addListener('registration', (t: Token) =>
      this.zone.run(() => this.onRegistration(t)),
    );
    await this.platform.push.addListener('registrationError', () =>
      // Volontairement sans detail: pas de donnees personnelles dans les logs.
      console.warn('[push] registration error'),
    );
    await this.platform.push.addListener(
      'pushNotificationReceived',
      (n: PushNotificationSchema) => this.zone.run(() => void this.onForeground(n)),
    );
    // Retenu par le plugin jusqu'a consommation: couvre le demarrage a froid.
    await this.platform.push.addListener(
      'pushNotificationActionPerformed',
      (a: ActionPerformed) =>
        this.zone.run(() => void this.navigateSafely(a?.notification?.data?.deepLink)),
    );

    this.auth.registerPreLogoutHook((ctx) => this.onPreLogout(ctx));

    // Connexion au demarrage, login, inscription, Google, changement de compte:
    // le profil /auth/me change -> on (re)enregistre si deja autorise.
    this.authState.me$
      .pipe(map(userKeyOf), distinctUntilChanged())
      .subscribe((key) => {
        this.currentUserKey = key;
        if (key) void this.registerIfGranted();
      });

    // Retour depuis les Parametres Android: l'autorisation a pu changer.
    this.platform.onResume(() => this.zone.run(() => void this.refreshPermission()));

    await this.checkPermission();
  }

  private async registerIfGranted(): Promise<void> {
    const state = await this.checkPermission();
    if (state !== 'granted') return; // jamais de prompt automatique
    await this.safeRegister();
  }

  private async safeRegister(): Promise<void> {
    try {
      await this.platform.push.register();
    } catch {
      console.warn('[push] register failed');
    }
  }

  private onRegistration(t: Token): void {
    const value = t?.value;
    if (!isValidPushToken(value)) {
      console.warn('[push] invalid token ignored');
      return;
    }
    this.token = value;
    this.postToken();
  }

  private postToken(): void {
    const token = this.token;
    const userKey = this.currentUserKey;
    if (!token || !userKey || !this.auth.isLoggedIn()) return;
    if (this.postedFor?.userKey === userKey && this.postedFor.token === token) return;

    const sent = { userKey, token };
    this.postedFor = sent;
    this.http
      .post<void>(`${this.baseUrl}/notifications/devices`, {
        token,
        platform: this.platform.platform(),
      })
      .subscribe({
        error: () => {
          if (this.postedFor === sent) this.postedFor = null; // retentera au prochain register
          console.warn('[push] device registration failed');
        },
      });
  }

  /** Synchrone, appele par AuthService.logout() avant l'effacement des jetons. */
  private onPreLogout(ctx: PreLogoutContext): void {
    const token = this.token;
    this.token = null;
    this.postedFor = null;

    if (token && ctx.accessToken) {
      this.http
        .post<void>(
          `${this.baseUrl}/notifications/devices/unregister`,
          { token },
          {
            headers: new HttpHeaders({ Authorization: `Bearer ${ctx.accessToken}` }),
            // Ne pas tenter de refresh / relogout si ce 401 arrive apres coup.
            context: new HttpContext().set(BYPASS_AUTH_INTERCEPTOR, true),
          },
        )
        .subscribe({ error: () => undefined });
    }

    this.platform.push.unregister().catch(() => undefined);
  }

  private async onForeground(n: PushNotificationSchema): Promise<void> {
    void this.notificationsState.refresh().catch(() => undefined);

    const header = shortText(n?.title, 80);
    const message = shortText(n?.body, 240);
    if (!header && !message) return;
    const route = safePushRoute(n?.data?.deepLink);

    // Ionic rend header/message en texte (innerHTMLTemplatesEnabled = false).
    const t = await this.toast.create({
      header: header || undefined,
      message: message || undefined,
      duration: 6000,
      position: 'top',
      buttons: [
        {
          text: this.translate.instant('PUSH.VIEW'),
          handler: () => {
            void this.navigateSafely(route);
          },
        },
      ],
    });
    await t.present();
  }

  private async navigateSafely(rawDeepLink: unknown): Promise<void> {
    const route = safePushRoute(rawDeepLink);
    await this.whenRouterReady();
    try {
      const ok = await this.router.navigateByUrl(route);
      if (!ok && route !== '/tabs/home') await this.router.navigateByUrl('/tabs/home');
    } catch {
      await this.router.navigateByUrl('/tabs/home').catch(() => false);
    }
  }

  /** Demarrage a froid: attendre la premiere navigation (gardes compris). */
  private async whenRouterReady(): Promise<void> {
    if (this.router.navigated) return;
    await firstValueFrom(
      merge(
        this.router.events.pipe(filter((e) => e instanceof NavigationEnd)),
        timer(ROUTER_READY_TIMEOUT_MS),
      ),
    );
  }
}
