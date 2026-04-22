import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export type PaymentProvider = 'MOCK' | 'DIGIKUNTZ';

export interface CreateIntentPayload {
  raffleId: string;
  amount: number;
  provider: PaymentProvider;
  userEmail: string;
  userPhone: string;
  userCountry: string;
  senderName: string;
  idempotencyKey?: string;
}

export interface CreateIntentResponse {
  transactionId: string;
  provider: PaymentProvider;
  amount: number;
  currency: string;
  status: 'PENDING' | 'SUCCESS' | 'FAILED' | string;
  quantity: number;
  ticketUnitPrice: number;
  paymentLink?: string;
  paymentWithTaxes?: number;
}

export interface VerifyResponse {
  ok: boolean;
  status: 'PENDING' | 'SUCCESS' | 'FAILED' | string;
  transactionId: string;
  remoteStatus?: string;
}

export interface MockConfirmResponse {
  ok: boolean;
  transactionId: string;
  status: 'SUCCESS' | 'PENDING' | 'FAILED' | string;
  idempotent?: boolean;
}

@Injectable({ providedIn: 'root' })
export class PaymentsApiService {
  private base = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  createIntent(payload: CreateIntentPayload) {
    return this.http.post<CreateIntentResponse>(
      `${this.base}/payments/intent`,
      payload,
    );
  }

  verifyDigikuntz(transactionId: string) {
    return this.http.post<VerifyResponse>(
      `${this.base}/payments/digikuntz/verify`,
      { transactionId },
    );
  }

  mockConfirm(transactionId: string, providerRef: string) {
    return this.http.post<MockConfirmResponse>(
      `${this.base}/payments/mock/confirm`,
      { transactionId, providerRef },
    );
  }

  useFreeTicket(raffleId: string) {
    return this.http.post<{ ok: boolean; transactionId: string }>(
      `${this.base}/payments/free-ticket`,
      { raffleId },
    );
  }
}
