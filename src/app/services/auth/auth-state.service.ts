import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { AuthService } from './auth.service';

export type UserRole = 'ADMIN' | 'USER';

export interface MeDto {
  id: string;
  email: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthStateService {
  private readonly meSubject = new BehaviorSubject<MeDto | null>(null);
  readonly me$ = this.meSubject.asObservable();

  readonly isAdmin$ = this.me$.pipe(map((u) => u?.role === 'ADMIN'));
  readonly isLoggedIn$ = this.me$.pipe(map((u) => !!u));

  constructor(private auth: AuthService) {}

  bootstrap(): void {
    // si pas de token => pas besoin d'appeler /me
    if (!this.auth.getToken()) {
      this.meSubject.next(null);
      return;
    }
    this.refreshMe();
  }

  refreshMe(): void {
    this.auth
      .me<MeDto>()
      .pipe(
        catchError((err) => {
          if (Number((err as any)?.status ?? 0) === 401) {
            this.auth.logout();
          }
          this.meSubject.next(null);
          return of(null);
        }),
      )
      .subscribe((u) => this.meSubject.next(u));
  }

  clear(): void {
    this.meSubject.next(null);
  }
}
