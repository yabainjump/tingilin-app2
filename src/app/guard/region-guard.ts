import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { AuthStateService } from '../services/auth/auth-state.service';
import { USER_REGION_OPTIONS } from '../shared/region-picker/regions';

const VALID_REGIONS: ReadonlySet<string> = new Set(
  USER_REGION_OPTIONS.map(({ value }) => value),
);

@Injectable({ providedIn: 'root' })
export class RegionGuard implements CanActivate {
  constructor(
    private readonly auth: AuthService,
    private readonly authState: AuthStateService,
    private readonly router: Router,
  ) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> {
    return this.authState.ensureCurrentUser().pipe(
      map((user) => {
        // Une erreur reseau ponctuelle ne doit pas bloquer une session encore
        // valide. Un 401 est deja traite par AuthStateService.logout().
        if (!user) {
          return this.auth.isLoggedIn()
            ? true
            : this.router.createUrlTree(['/auth/login'], {
                queryParams: { redirect: state.url },
              });
        }

        const region = String(user.region ?? '').trim().toUpperCase();
        if (VALID_REGIONS.has(region)) return true;

        return this.router.createUrlTree(['/onboarding'], {
          queryParams: {
            requiredRegion: '1',
            redirect: this.safeRedirect(state.url),
          },
        });
      }),
    );
  }

  private safeRedirect(url: string): string {
    const value = String(url ?? '').trim();
    return value.startsWith('/') && !value.startsWith('//')
      ? value
      : '/tabs/home';
  }
}
