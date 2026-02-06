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
};

export interface AuthTokenResponse {
  access_token: string;
  user?: any;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = environment.apiBaseUrl;

  // ✅ on garde la clé qui marchait avant
  private readonly tokenKey = 'tingilin_access_token';

  // ✅ compat : si tu avais déjà stocké dans l’autre clé
  private readonly legacyTokenKey = 'tingilin_token';

  constructor(private http: HttpClient) {}

  login(payload: LoginPayload): Observable<AuthTokenResponse> {
    // ✅ on construit un body compatible backend
    const body: any = {
      password: payload.password,
      ...(payload.phoneOrEmail ? { phoneOrEmail: payload.phoneOrEmail } : {}),
      ...(payload.email ? { email: payload.email } : {}),
      ...(payload.phone ? { phone: payload.phone } : {}),
    };

    return this.http
      .post<AuthTokenResponse>(`${this.baseUrl}/auth/login`, body)
      .pipe(tap((res) => this.setToken(res.access_token)));
  }

  register(payload: RegisterPayload, storeToken = true): Observable<AuthTokenResponse> {
    return this.http
      .post<AuthTokenResponse>(`${this.baseUrl}/auth/register`, payload)
      .pipe(
        tap((res) => {
          if (storeToken) this.setToken(res.access_token);
        })
      );
  }

  me<T = any>(): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/auth/me`, {
      headers: this.authHeaders(),
    });
  }

  forgotPassword(payload: { email?: string; phone?: string; phoneOrEmail?: string }) {
    return this.http.post(`${this.baseUrl}/auth/forgot-password`, payload);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.legacyTokenKey);
  }

  getToken(): string | null {
    // ✅ lit l’ancien token si présent
    return localStorage.getItem(this.tokenKey) || localStorage.getItem(this.legacyTokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private setToken(token: string): void {
    if (!token) return;
    localStorage.setItem(this.tokenKey, token);
    // optionnel: on peut aussi nettoyer l’ancienne clé
    localStorage.removeItem(this.legacyTokenKey);
  }

  private authHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders(token ? { Authorization: `Bearer ${token}` } : {});
  }
}
