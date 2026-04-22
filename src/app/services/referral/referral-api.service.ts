import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface ReferralPersonDto {
  userId: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  active: boolean;
  qualifiedAt?: string | null;
  createdAt?: string | null;
}

export interface ReferralSummaryDto {
  referralCode: string;
  referralLink: string;
  freeTicketsBalance: number;
  referral: {
    qualifiedReferrals: number;
    target: number;
    progress: number;
    rewardsGranted: number;
  };
  loyalty: {
    playedRafflesCount: number;
    target: number;
    progress: number;
    rewardsGranted: number;
  };
  referrals?: ReferralPersonDto[];
  rewardHistory: Array<{
    source: 'REFERRAL' | 'LOYALTY' | string;
    amount: number;
    reason: string;
    createdAt: string | null;
    metadata?: Record<string, any>;
  }>;
}

export interface ReferralListDto {
  data: ReferralPersonDto[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

@Injectable({ providedIn: 'root' })
export class ReferralApiService {
  private base = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  summary() {
    return this.http.get<ReferralSummaryDto>(`${this.base}/users/me/referral-summary`);
  }

  referrals(page = 1, limit = 10) {
    const params = new HttpParams()
      .set('page', String(page))
      .set('limit', String(limit));

    return this.http.get<ReferralListDto>(`${this.base}/users/me/referrals`, {
      params,
    });
  }

  useFreeTicket(raffleId: string) {
    return this.http.post<{ ok: boolean; transactionId: string }>(
      `${this.base}/payments/free-ticket`,
      { raffleId },
    );
  }
}
