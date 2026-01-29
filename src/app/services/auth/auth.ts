import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthTokenResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = environment.apiBaseUrl;
  private readonly tokenKey = 'tingilin_access_token';

  constructor(private http: HttpClient) {}

  login(payload: LoginRequest): Observable<AuthTokenResponse> {
    return this.http
      .post<AuthTokenResponse>(`${this.baseUrl}/auth/login`, payload)
      .pipe(tap((res) => this.setToken(res.access_token)));
  }

  register(
    payload: LoginRequest,
    storeToken = true,
  ): Observable<AuthTokenResponse> {
    return this.http
      .post<AuthTokenResponse>(`${this.baseUrl}/auth/register`, payload)
      .pipe(
        tap((res) => {
          if (storeToken) this.setToken(res.access_token);
        }),
      );
  }

  me<T = any>(): Observable<T> {
    // utile pour l’étape suivante
    return this.http.get<T>(`${this.baseUrl}/auth/me`, {
      headers: this.authHeaders(),
    });
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private authHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders(token ? { Authorization: `Bearer ${token}` } : {});
  }

  forgotPassword(payload: { email?: string; phone?: string }) {
    return this.http.post(`${this.baseUrl}/auth/forgot-password`, payload);
  }
}
