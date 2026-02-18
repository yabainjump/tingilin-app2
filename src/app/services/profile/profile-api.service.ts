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
  result: HistoryResult;
  imageUrl?: string;
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
      {
        title: 'iPhone 15 Pro Max',
        dateLabel: '24 Oct',
        ticketsLabel: '5 Tickets',
        result: 'WON',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCSaINChWgr81vXntjrNeikMgpdCcaAGxHDgGVoEMAnENBzD4sm3T4G5KITA7-AmJ7SUNaaNhmNA4pihKfrnPB_dVqaalqIqBB8W0WVb41uD2IMsvmJ2Z3kEQnjWGfqZ6Ja1vS_qu8L5Zrc9kdvQYAmz2Ycq0RdTOG3Uo9VBnDuD-CXvuyPjzp6UFULrOXL4mni_TNK6KPoQWFiyuNsfDjlpMemVyx5KYTVh4zy5CeiZcmMutkohw-Ncis-06q0UT9zprBm3OJwnZ8',
      },
      {
        title: 'Sony PS5',
        dateLabel: '20 Oct',
        ticketsLabel: '2 Tickets',
        result: 'LOST',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC2o1lGMNhaE4v7rseehgfRByJeJFSjcXuBAtRp77FlFmAF-QHhDZOLXOcybzo4kJRtknIcKok77i0P7H4eqRACSnnzFbgFPNBiabT_GmIXM1jyPBVpxED-REd5hzKgQaPbpLoyv0SCkiCkio1g7T7s2VWJdQMxMAs99nzK03cV0n3etTuhry7tLcLnUuO3W0Jt8m7a1vG3Z5bu-soxvKMXfK23GEfdJgVtcF8296ZspUHj-lCWYRA-LyWmKhvo-IYJtagwvVmR2Is',
      },
      {
        title: 'Cash Prize 1M',
        dateLabel: '18 Oct',
        ticketsLabel: '10 Tickets',
        result: 'LOST',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCJn3zsPq3w6Sk2ac-E7QFO4NF2x-cNm6w8ZyQPvxsy_saHwn1J1haN7aw4yZwfBRsJB7x6LWv5vGVHOkeyt5JpnR4sfbxjm2HJ0ruLC0cl7jeZqeaWztFEyfLW6sD5UUG-qySq9XX8DIzVoT9jvHM8o6SbzZZ6BuZZTyEnsxTAlhmMgJZPxXaQXRpiC_zuzIBKDs-amF8nfILAI6fO4E3F2lP8QTo2TEbqLd-mm1E1uBm1A6Ek8Jbywu4JZEoHk1y56dBHnRdE-VA',
      },
      {
        title: 'Nike Air Max',
        dateLabel: '10 Oct',
        ticketsLabel: '3 Tickets',
        result: 'WON',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAJEPSvWe9C_dL4p-G7ZYP2GF0QsM2e90ZhqHKe6Ko1fATZs8DiIL45PKpgXph2z9PWAtgWSS2zAfNKDaPeuv43KO3UUJUj-7bGSAvFXckNxpXhmUfSU426n1tzdP7iiBc2P6KZqvgqVV6ZtEGpaRLYyRoE7MfQCiRFWH9cX8ghswZ-8qbyDYvm-sAGVnL7J97vAUuo6VXOgoG2B4kEFIP4JBbld_EY97ASJlE2kwl15SWy0hrcbgLN1GOJ7A1SayQltoTZoY46nbk',
      },
      {
        title: 'Samsung S23',
        dateLabel: '05 Oct',
        ticketsLabel: '1 Ticket',
        result: 'LOST',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuANyBDUJhzEODS1IfYCku-IpbPtZkkDwz5Lw6fCyKFBABAIXUYNXZzVQilT0A7dENwu6HBVy0FhY_pZL2aTApfr4vBazESHBI-AlCXhUhPZO6s0rA9gRaglFdzoYoqpGMgdf0N_7VoYepRnmYttrQJTk6WUhlhZpxMsvyYIbDv1Ut3Ij6xrs8Mhl9FRUQ59CdGLMXXm-ptOWthJCag_kxbbZRBn5E1pwSOMZltqhh3w0b-R37N_c2NKUPkEqpKheO6H92enU0hTvYY',
      },
    ];

    if (!this.auth.isLoggedIn()) return of(mock.slice(0, limit));

    return this.http
      .get<
        ProfileHistoryItem[]
      >(`${this.baseUrl}/users/me/history?limit=${limit}`)
      .pipe(catchError(() => of(mock.slice(0, limit))));
  }
}
