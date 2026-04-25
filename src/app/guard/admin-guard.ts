import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {}

  canActivate(): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (!this.auth.isLoggedIn()) {
      return this.router.createUrlTree(['/auth/login']);
    }

    return this.auth.me<{ role?: string }>().pipe(
      map((user) =>
        String(user?.role ?? '').toUpperCase() === 'ADMIN'
          ? true
          : this.router.createUrlTree(['/tabs/home']),
      ),
      catchError((error) => {
        if (Number((error as any)?.status ?? 0) === 401) {
          this.auth.logout();
          return of(this.router.createUrlTree(['/auth/login']));
        }
        return of(this.router.createUrlTree(['/tabs/home']));
      }),
    );
  }
}
