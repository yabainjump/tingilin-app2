import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  finalize,
  map,
  of,
  shareReplay,
  tap,
} from 'rxjs';
import { AuthService } from './auth.service';
import { UserRegion } from 'src/app/shared/region-picker/regions';

export type UserRole = 'ADMIN' | 'USER';

export interface MeDto {
  id?: string;
  _id?: string;
  email: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
  phone?: string;
  region?: string | null;
}

@Injectable({ providedIn: 'root' })
export class AuthStateService {
  private readonly meSubject = new BehaviorSubject<MeDto | null>(null);
  private meRequest$: Observable<MeDto | null> | null = null;
  private sessionVersion = 0;
  readonly me$ = this.meSubject.asObservable();

  readonly isAdmin$ = this.me$.pipe(map((u) => u?.role === 'ADMIN'));
  readonly isLoggedIn$ = this.me$.pipe(map((u) => !!u));

  constructor(private auth: AuthService) {
    // Une nouvelle session ne doit jamais reutiliser le profil du compte
    // precedent. Le garde de region rechargera ensuite /auth/me.
    this.auth.sessionReset$.subscribe(() => {
      this.sessionVersion += 1;
      this.meRequest$ = null;
      this.meSubject.next(null);
    });
  }

  // Snapshot synchrone de l'utilisateur courant (region incluse).
  get me(): MeDto | null {
    return this.meSubject.value;
  }

  bootstrap(): void {
    // si pas de token => pas besoin d'appeler /me
    if (!this.auth.getToken()) {
      this.meSubject.next(null);
      return;
    }
    this.refreshMe();
  }

  refreshMe(): void {
    this.ensureCurrentUser(true).subscribe();
  }

  /**
   * Charge une seule fois le profil courant et partage la requete entre les
   * gardes concurrents. Le profil contient notamment la region obligatoire.
   */
  ensureCurrentUser(force = false): Observable<MeDto | null> {
    if (!force && this.meSubject.value) {
      return of(this.meSubject.value);
    }
    if (this.meRequest$) return this.meRequest$;

    const requestSessionVersion = this.sessionVersion;
    const request$ = this.auth.me<MeDto>().pipe(
      map((user) =>
        requestSessionVersion === this.sessionVersion ? user : null,
      ),
      tap((user) => {
        if (user) this.meSubject.next(user);
      }),
      catchError((err) => {
        // Une reponse d'une ancienne session ne doit ni ecraser le nouveau
        // profil, ni deconnecter le compte qui vient de se connecter.
        if (requestSessionVersion !== this.sessionVersion) return of(null);

        if (Number((err as { status?: unknown })?.status ?? 0) === 401) {
          this.auth.logout();
        }
        this.meSubject.next(null);
        return of(null);
      }),
      finalize(() => {
        if (this.meRequest$ === request$) this.meRequest$ = null;
      }),
      shareReplay(1),
    );

    this.meRequest$ = request$;
    return request$;
  }

  clear(): void {
    this.meSubject.next(null);
  }

  // PATCH /users/me { region } puis mise a jour du cache local.
  updateRegion(region: UserRegion): Observable<MeDto | null> {
    return this.auth.updateRegion(region).pipe(
      map(() => {
        const current = this.meSubject.value;
        if (!current) return null;
        return { ...current, region };
      }),
      tap((updated) => {
        if (updated) {
          this.meSubject.next(updated);
        }
      }),
    );
  }
}
