import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthTokenStorageService } from './auth-token-storage.service';

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
  referralCode?: string;
};

export interface AuthTokenResponse {
  access_token: string;
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
  devResetCode?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = environment.apiBaseUrl;

  private readonly accessKey = 'tingilin_access_token';
  private readonly refreshKey = 'tingilin_refresh_token';

  private readonly tokenKey = 'tingilin_access_token';

  private readonly legacyTokenKey = 'tingilin_token';
  private readonly maxTokenLength = 3500;

  constructor(
    private http: HttpClient,
    private tokenStorage: AuthTokenStorageService,
  ) {}

  login(email: string, password: string) {
    return this.http
      .post<{
        access_token: string;
        refresh_token: string;
      }>(`${this.baseUrl}/auth/login`, { email, password })
      .pipe(tap((res) => this.setTokens(res.access_token, res.refresh_token)));
  }

  register(dto: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    referralCode?: string;
  }) {
    return this.http
      .post<{
        access_token: string;
        refresh_token: string;
      }>(`${this.baseUrl}/auth/register`, dto)
      .pipe(tap((res) => this.setTokens(res.access_token, res.refresh_token)));
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

  logout(): void {
    const token = this.getAccessToken();
    if (token) {
      this.http
        .post(
          `${this.baseUrl}/auth/logout`,
          {},
          {
            headers: new HttpHeaders({
              Authorization: `Bearer ${token}`,
            }),
          },
        )
        .subscribe({ error: () => undefined });
    }

    this.clearTokens();
  }

  getToken(): string | null {
    const access = this.readValidToken(this.tokenKey);
    if (access) return access;
    return this.readValidToken(this.legacyTokenKey);
  }

  isLoggedIn(): boolean {
    const access = this.getAccessToken();
    if (access && !this.isJwtExpired(access)) return true;
    return !!this.getRefreshToken();
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

    const validRefresh = this.normalizeToken(refresh ?? null);
    if (validRefresh) {
      this.tokenStorage.set(this.refreshKey, validRefresh);
    } else if (refresh !== undefined) {
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
  }

  refresh(refresh_token: string) {
    return this.http.post<{ access_token: string; refresh_token: string }>(
      `${this.baseUrl}/auth/refresh`,
      { refresh_token },
    );
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
