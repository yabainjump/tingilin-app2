import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshSubject = new BehaviorSubject<string | null>(null);

  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const isAuthEndpoint =
      req.url.includes('/auth/login') ||
      req.url.includes('/auth/register') ||
      req.url.includes('/auth/forgot-password') ||
      req.url.includes('/auth/refresh');

    const token = this.auth.getAccessToken();

    const authReq =
      !isAuthEndpoint && token
        ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
        : req;

    return next.handle(authReq).pipe(
      catchError((err: any) => {
        if (
          err instanceof HttpErrorResponse &&
          err.status === 401 &&
          !isAuthEndpoint
        ) {
          return this.handle401(req, next);
        }
        return throwError(() => err);
      }),
    );
  }

  private handle401(req: HttpRequest<any>, next: HttpHandler) {
    const refreshToken = this.auth.getRefreshToken();

    if (!refreshToken) {
      this.auth.logout();
      return throwError(() => new Error('No refresh token'));
    }

    // si refresh déjà en cours → on attend le nouveau token
    if (this.isRefreshing) {
      return this.refreshSubject.pipe(
        filter((t) => !!t),
        take(1),
        switchMap((newToken) => {
          const retryReq = req.clone({
            setHeaders: { Authorization: `Bearer ${newToken}` },
          });
          return next.handle(retryReq);
        }),
      );
    }

    this.isRefreshing = true;
    this.refreshSubject.next(null);

    return this.auth.refresh(refreshToken).pipe(
      switchMap((res) => {
        this.isRefreshing = false;

        // ✅ on stocke les nouveaux tokens
        this.auth.setTokens(res.access_token, res.refresh_token);

        // ✅ on réveille les requêtes en attente
        this.refreshSubject.next(res.access_token);

        // ✅ on rejoue la requête initiale
        const retryReq = req.clone({
          setHeaders: { Authorization: `Bearer ${res.access_token}` },
        });
        return next.handle(retryReq);
      }),
      catchError((e) => {
        this.isRefreshing = false;
        this.auth.logout();
        return throwError(() => e);
      }),
    );
  }
}
