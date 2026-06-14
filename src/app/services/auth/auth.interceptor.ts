import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, finalize, shareReplay, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // Refresh en cours partage entre toutes les requetes concurrentes:
  // succes ET echec sont propages a tous les abonnes (pas de requete bloquee).
  private refresh$: Observable<string> | null = null;

  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const isAuthEndpoint =
      req.url.includes('/auth/login') ||
      req.url.includes('/auth/register') ||
      req.url.includes('/auth/forgot-password') ||
      req.url.includes('/auth/reset-password') ||
      req.url.includes('/auth/logout') ||
      req.url.includes('/auth/refresh');

    const token = this.auth.getAccessToken();

    if (!isAuthEndpoint && !token && this.auth.getRefreshToken()) {
      return this.handle401(req, next);
    }

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

    return this.getRefresh(refreshToken).pipe(
      switchMap((newToken) => {
        const retryReq = req.clone({
          setHeaders: { Authorization: `Bearer ${newToken}` },
        });
        return next.handle(retryReq);
      }),
    );
  }

  /**
   * Renvoie le refresh en cours (partage), ou en demarre un nouveau.
   * En cas de succes: stocke les tokens et emet le nouvel access token.
   * En cas d'echec: deconnecte et propage l'erreur a TOUTES les requetes
   * en attente (au lieu de les laisser bloquees indefiniment).
   */
  private getRefresh(refreshToken: string): Observable<string> {
    if (!this.refresh$) {
      this.refresh$ = this.auth.refresh(refreshToken).pipe(
        tap((res) => this.auth.setTokens(res.access_token, res.refresh_token)),
        map((res) => res.access_token),
        catchError((e) => {
          this.auth.logout();
          return throwError(() => e);
        }),
        finalize(() => {
          this.refresh$ = null;
        }),
        shareReplay(1),
      );
    }

    return this.refresh$;
  }
}
