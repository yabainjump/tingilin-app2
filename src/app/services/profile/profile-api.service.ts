import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

export interface ProfileUser {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  role?: 'USER' | 'ADMIN' | 'MODERATOR';
  avatar?: string;
  status?: 'ACTIVE' | 'SUSPEND';
  profile?: Record<string, any>;
}

export interface ProfileStats {
  balance: number;
  currency: string;
  ticketsBought: number;
  productsWon: number;
}

export type HistoryResult = 'WON' | 'LOST';

export interface ProfileHistoryItem {
  title: string;
  dateLabel: string;
  ticketsLabel: string;
  // result: HistoryResult;
  result?: 'LOST' | 'WIN' | 'NONE';
  imageUrl?: string;
  raffleId: string;
  status?: string;
  endsAt?: string;
}

@Injectable({ providedIn: 'root' })
export class ProfileApiService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) {}

  me(): Observable<ProfileUser | null> {
    return this.http
      .get<ProfileUser>(`${this.baseUrl}/users/me`)
      .pipe(catchError(() => of(null)));
  }

  updateMe(dto: {
    firstName: string;
    lastName: string;
    phone: string;
    avatar?: string;
  }): Observable<ProfileUser> {
    return this.http.patch<ProfileUser>(`${this.baseUrl}/users/me`, dto);
  }

  stats(): Observable<ProfileStats> {
    const fallback: ProfileStats = {
      balance: 2500,
      currency: 'XAF',
      ticketsBought: 124,
      productsWon: 12,
    };

    if (!this.auth.isLoggedIn()) return of(fallback);

    return this.http
      .get<ProfileStats>(`${this.baseUrl}/users/me/stats`)
      .pipe(catchError(() => of(fallback)));
  }

  history(limit = 7): Observable<ProfileHistoryItem[]> {
    const mock: ProfileHistoryItem[] = [
     
    ];

    if (!this.auth.isLoggedIn()) return of(mock.slice(0, limit));

    return this.http
      .get<
        ProfileHistoryItem[]
      >(`${this.baseUrl}/users/me/history?limit=${limit}`)
      .pipe(catchError(() => of(mock.slice(0, limit))));
  }
}
