import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

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

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = environment.apiBaseUrl;

  private readonly accessKey = 'tingilin_access_token';
  private readonly refreshKey = 'tingilin_refresh_token';

  private readonly tokenKey = 'tingilin_access_token';

  private readonly legacyTokenKey = 'tingilin_token';

  constructor(private http: HttpClient) {}

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
    return this.http.post(`${this.baseUrl}/auth/forgot-password`, payload);
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
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.legacyTokenKey);
    this.clearTokens();
  }

  getToken(): string | null {
    return (
      localStorage.getItem(this.tokenKey) ||
      localStorage.getItem(this.legacyTokenKey)
    );
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private setToken(token: string): void {
    if (!token) return;
    localStorage.setItem(this.tokenKey, token);
    localStorage.removeItem(this.legacyTokenKey);
  }

  private authHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders(token ? { Authorization: `Bearer ${token}` } : {});
  }

  setTokens(access: string, refresh?: string) {
    if (access) {
      localStorage.setItem(this.accessKey, access);
      localStorage.removeItem(this.legacyTokenKey);
    }
    if (refresh) localStorage.setItem(this.refreshKey, refresh);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessKey) || this.getToken();
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshKey);
  }

  clearTokens() {
    localStorage.removeItem(this.accessKey);
    localStorage.removeItem(this.refreshKey);
  }

  refresh(refresh_token: string) {
    return this.http.post<{ access_token: string; refresh_token: string }>(
      `${this.baseUrl}/auth/refresh`,
      { refresh_token },
    );
  }
}
