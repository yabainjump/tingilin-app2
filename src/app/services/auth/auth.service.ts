import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthTokenStorageService } from './auth-token-storage.service';
import { Capacitor } from '@capacitor/core';
import { UserRegion } from 'src/app/shared/region-picker/regions';

export type LoginPayload = {
  email?: string;
  phone?: string;
  phoneOrEmail?: string;
  password: string;
};

export type RegisterPayload = {
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  password: string;
  region?: UserRegion;
  referralCode?: string;
};

export interface AuthTokenResponse {
  access_token: string;
  refresh_token?: string;
  user?: any;
}

export interface ForgotPasswordResponse {
  ok: boolean;
  message?: string;
  retryAfterSeconds?: number;
  expiresInSeconds?: number;
  delivery?: 'EMAIL' | 'LOG';
  deliveryReason?:
    | 'EMAIL_SENT'
    | 'EMAIL_TARGET_MISSING'
    | 'SMTP_CONFIG_MISSING'
    | 'SMTP_SEND_FAILED'
    | 'USER_NOT_FOUND';
}

/** Contexte passe aux hooks pre-logout (jeton d'acces encore en memoire). */
export interface PreLogoutContext {
  accessToken: string | null;
}

export type PreLogoutHook = (ctx: PreLogoutContext) => void;

/** Code de parrainage tel que l'API l'attend (A-Z/0-9, 4 a 16, MaxLength de l API), sinon ''. */
export function normalizeReferralCode(value: unknown): string {
  const code = String(typeof value === 'string' ? value : '').trim().toUpperCase();
  return /^[A-Z0-9-]{4,16}$/.test(code) ? code : '';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = environment.apiBaseUrl;

  private readonly accessKey = 'tingilin_access_token';
  private readonly refreshKey = 'tingilin_refresh_token';
  private readonly sessionKey = 'tingilin_session';

  private readonly tokenKey = 'tingilin_access_token';

  private readonly legacyTokenKey = 'tingilin_token';
  private readonly maxTokenLength = 3500;

  // Emis a chaque changement de session (login / logout). Les services qui
  // gardent des donnees par-utilisateur (notifications, file offline, caches)
  // s'y abonnent pour se vider et eviter toute fuite entre comptes.
  private readonly sessionReset = new Subject<void>();
  readonly sessionReset$ = this.sessionReset.asObservable();

  // Hooks synchrones executes au debut de logout(), AVANT l'effacement des
  // jetons (ex: desinscription du token push avec l'access token encore
  // valide). Ils ne doivent jamais bloquer ni faire echouer la deconnexion.
  private readonly preLogoutHooks = new Set<PreLogoutHook>();

  constructor(
    private http: HttpClient,
    private tokenStorage: AuthTokenStorageService,
  ) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthTokenResponse>(`${this.baseUrl}/auth/login`, { email, password }, this.authRequestOptions())
      .pipe(
        tap((res) => {
          this.setTokens(res.access_token, res.refresh_token);
          this.sessionReset.next(); // nouveau compte -> on vide les caches du precedent
        }),
      );
  }

  register(dto: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    region?: UserRegion;
    referralCode?: string;
    isAdult: boolean;
  }) {
    return this.http
      .post<AuthTokenResponse>(`${this.baseUrl}/auth/register`, dto, this.authRequestOptions())
      .pipe(
        tap((res) => {
          this.setTokens(res.access_token, res.refresh_token);
          this.sessionReset.next();
        }),
      );
  }

  // Connexion Google: POST /auth/google avec l'idToken Google Sign-In.
  // Meme contrat de reponse que /auth/login (refresh token en cookie sur web,
  // dans la reponse sur natif via X-Client-Platform: native).
  // Depuis l'inscription, on transmet aussi le code de parrainage et la
  // declaration 18+ (sinon le filleul Google n'etait pas rattache a son parrain).
  loginWithGoogle(
    idToken: string,
    opts: { region?: UserRegion; referralCode?: string; isAdult?: boolean } = {},
  ) {
    const body: {
      idToken: string;
      region?: UserRegion;
      referralCode?: string;
      isAdult?: boolean;
    } = { idToken };
    if (opts.region) body.region = opts.region;
    const referralCode = normalizeReferralCode(opts.referralCode);
    if (referralCode) body.referralCode = referralCode;
    if (opts.isAdult === true) body.isAdult = true;
    return this.http
      .post<AuthTokenResponse>(`${this.baseUrl}/auth/google`, body, this.authRequestOptions())
      .pipe(
        tap((res) => {
          this.setTokens(res.access_token, res.refresh_token);
          this.sessionReset.next();
        }),
      );
  }

  updateRegion(region: UserRegion) {
    return this.http
      .patch<{ region?: string | null }>(
        `${this.baseUrl}/users/me`,
        { region },
        this.authRequestOptions(),
      );
  }

  updatePushPrefs(patch: { reminders?: boolean; newRaffles?: boolean }) {
    const body: { pushReminders?: boolean; pushNewRaffles?: boolean } = {};
    if (typeof patch.reminders === 'boolean') body.pushReminders = patch.reminders;
    if (typeof patch.newRaffles === 'boolean') body.pushNewRaffles = patch.newRaffles;
    return this.http.patch<unknown>(
      `${this.baseUrl}/users/me`,
      body,
      this.authRequestOptions(),
    );
  }

  /** Lien "Confirmer mon email" (public: le jeton du lien suffit). */
  verifyEmail(token: string) {
    return this.http.post<{ ok: boolean; emailVerified: boolean }>(
      `${this.baseUrl}/auth/verify-email`,
      { token },
      this.authRequestOptions(),
    );
  }

  resendEmailVerification() {
    return this.http.post<{ ok: boolean; alreadyVerified: boolean; email?: string }>(
      `${this.baseUrl}/auth/resend-verification`,
      {},
      { headers: this.authHeaders() },
    );
  }

  me<T = any>(): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/auth/me`, {
      headers: this.authHeaders(),
    });
  }

  forgotPassword(payload: {
    identifier?: string;
    email?: string;
    phone?: string;
    phoneOrEmail?: string;
  }) {
    return this.http.post<ForgotPasswordResponse>(
      `${this.baseUrl}/auth/forgot-password`,
      payload,
    );
  }

  resetPassword(payload: {
    identifier?: string;
    email?: string;
    phone?: string;
    phoneOrEmail?: string;
    code: string;
    newPassword: string;
  }) {
    return this.http.post<{ ok: boolean; message?: string }>(
      `${this.baseUrl}/auth/reset-password`,
      payload,
    );
  }

  changePassword(currentPassword: string, newPassword: string): Observable<{ ok: boolean; message?: string }> {
    return this.http.patch<{ ok: boolean; message?: string }>(
      `${this.baseUrl}/auth/change-password`,
      { currentPassword, newPassword },
    );
  }

  /** Enregistre un hook pre-logout; renvoie la fonction de desinscription. */
  registerPreLogoutHook(hook: PreLogoutHook): () => void {
    this.preLogoutHooks.add(hook);
    return () => this.preLogoutHooks.delete(hook);
  }

  logout(): void {
    const token = this.getAccessToken();
    const refreshToken = this.getRefreshToken();
    for (const hook of Array.from(this.preLogoutHooks)) {
      try {
        hook({ accessToken: token });
      } catch {
        // Un hook defaillant ne doit jamais empecher la deconnexion.
      }
    }
    this.http
      .post(
        `${this.baseUrl}/auth/logout`,
        refreshToken ? { refresh_token: refreshToken } : {},
        {
          headers: new HttpHeaders(
            token ? { Authorization: `Bearer ${token}` } : {},
          ),
          withCredentials: true,
        },
      )
      .subscribe({ error: () => undefined });

    this.clearTokens();
    this.sessionReset.next(); // vide tous les caches par-utilisateur
  }

  getToken(): string | null {
    const access = this.readValidToken(this.tokenKey);
    if (access) return access;
    return this.readValidToken(this.legacyTokenKey);
  }

  isLoggedIn(): boolean {
    const access = this.getAccessToken();
    if (access && !this.isJwtExpired(access)) return true;
    return this.hasRefreshSession();
  }

  private setToken(token: string): void {
    const valid = this.normalizeToken(token);
    if (!valid) return;
    this.tokenStorage.set(this.tokenKey, valid);
    this.tokenStorage.remove(this.legacyTokenKey);
  }

  private authHeaders(): HttpHeaders {
    const token = this.getAccessToken();
    return new HttpHeaders(token ? { Authorization: `Bearer ${token}` } : {});
  }

  setTokens(access: string, refresh?: string) {
    const validAccess = this.normalizeToken(access);
    if (validAccess) {
      this.tokenStorage.set(this.accessKey, validAccess);
      this.tokenStorage.remove(this.legacyTokenKey);
    } else {
      this.tokenStorage.remove(this.accessKey);
    }

    this.tokenStorage.set(this.sessionKey, '1');
    const validRefresh = this.normalizeToken(refresh ?? null);
    if (validRefresh) {
      this.tokenStorage.set(this.refreshKey, validRefresh);
    } else if (refresh !== undefined || Capacitor.getPlatform() === 'web') {
      this.tokenStorage.remove(this.refreshKey);
    }
  }

  getAccessToken(): string | null {
    const token = this.readValidToken(this.accessKey) || this.getToken();
    if (!token) return null;

    if (this.isJwtExpired(token)) {
      this.tokenStorage.remove(this.accessKey);
      this.tokenStorage.remove(this.tokenKey);
      this.tokenStorage.remove(this.legacyTokenKey);
      return null;
    }

    return token;
  }

  getRefreshToken(): string | null {
    return this.readValidToken(this.refreshKey);
  }

  clearTokens() {
    this.tokenStorage.remove(this.accessKey);
    this.tokenStorage.remove(this.refreshKey);
    this.tokenStorage.remove(this.tokenKey);
    this.tokenStorage.remove(this.legacyTokenKey);
    this.tokenStorage.remove(this.sessionKey);
  }

  refresh(refresh_token?: string | null) {
    return this.http.post<AuthTokenResponse>(
      `${this.baseUrl}/auth/refresh`,
      refresh_token ? { refresh_token } : {},
      this.authRequestOptions(),
    );
  }

  hasRefreshSession(): boolean {
    return this.tokenStorage.get(this.sessionKey) === '1' || !!this.getRefreshToken();
  }

  private authRequestOptions() {
    const native = Capacitor.getPlatform() !== 'web';
    return {
      withCredentials: true,
      headers: native
        ? new HttpHeaders({ 'X-Client-Platform': 'native' })
        : undefined,
    };
  }

  private readValidToken(key: string): string | null {
    const raw = this.tokenStorage.get(key);
    const token = this.normalizeToken(raw);
    if (!token && raw !== null) {
      this.tokenStorage.remove(key);
    }
    return token;
  }

  private normalizeToken(token: string | null): string | null {
    const value = String(token ?? '').trim();
    if (!value || value === 'null' || value === 'undefined') return null;
    if (value.length > this.maxTokenLength) return null;
    if (!/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(value)) {
      return null;
    }
    return value;
  }

  private isJwtExpired(token: string): boolean {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return true;

      const payload = JSON.parse(this.base64UrlDecode(parts[1] ?? ''));
      const exp = Number(payload?.exp ?? 0);
      if (!Number.isFinite(exp) || exp <= 0) return true;

      const nowSec = Math.floor(Date.now() / 1000);
      return exp <= nowSec;
    } catch {
      return true;
    }
  }

  private base64UrlDecode(input: string): string {
    const padded = input.replace(/-/g, '+').replace(/_/g, '/');
    const mod = padded.length % 4;
    const normalized = mod === 0 ? padded : padded + '='.repeat(4 - mod);
    return atob(normalized);
  }
}
