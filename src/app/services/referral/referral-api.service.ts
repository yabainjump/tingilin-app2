import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  referrals: ReferralPersonDto[];
  rewardHistory: Array<{
    source: 'REFERRAL' | 'LOYALTY' | string;
    amount: number;
    reason: string;
    createdAt: string | null;
    metadata?: Record<string, any>;
  }>;
}

@Injectable({ providedIn: 'root' })
export class ReferralApiService {
  private base = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  summary() {
    return this.http.get<ReferralSummaryDto>(`${this.base}/users/me/referral-summary`);
  }

  useFreeTicket(raffleId: string) {
    return this.http.post<{ ok: boolean; transactionId: string }>(
      `${this.base}/payments/free-ticket`,
      { raffleId },
    );
  }
}
