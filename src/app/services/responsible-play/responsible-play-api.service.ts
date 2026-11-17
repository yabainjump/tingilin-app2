import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export type SpendingPeriod = 'DAY' | 'WEEK' | 'MONTH';

export type SpendingLimit = { period: SpendingPeriod; amount: number };

export type SpendingLimitStatus = {
  limit: SpendingLimit | null;
  spent: number;
  remaining: number | null;
  pending: {
    limit: SpendingLimit | null;
    remove: boolean;
    effectiveAt: string;
  } | null;
  loosenDelayHours: number;
};

export type SetSpendingLimitResult = {
  applied: 'IMMEDIATE' | 'DELAYED';
  status: SpendingLimitStatus;
};

/** Codes d'erreur metier renvoyes par l'API (champ `code`). */
export const AGE_CONFIRMATION_REQUIRED = 'AGE_CONFIRMATION_REQUIRED';
export const SPENDING_LIMIT_REACHED = 'SPENDING_LIMIT_REACHED';

@Injectable({ providedIn: 'root' })
export class ResponsiblePlayApiService {
  private readonly base = `${environment.apiBaseUrl}/users/me`;

  constructor(private http: HttpClient) {}

  confirmAdult(): Observable<unknown> {
    return this.http.post(`${this.base}/confirm-adult`, { confirm: true });
  }

  status(): Observable<SpendingLimitStatus> {
    return this.http.get<SpendingLimitStatus>(`${this.base}/spending-limit`);
  }

  setLimit(limit: SpendingLimit): Observable<SetSpendingLimitResult> {
    return this.http.put<SetSpendingLimitResult>(`${this.base}/spending-limit`, limit);
  }

  removeLimit(): Observable<SetSpendingLimitResult> {
    return this.http.delete<SetSpendingLimitResult>(`${this.base}/spending-limit`);
  }

  cancelPending(): Observable<SpendingLimitStatus> {
    return this.http.delete<SpendingLimitStatus>(`${this.base}/spending-limit/pending`);
  }

  setShowInLiveFeed(show: boolean): Observable<unknown> {
    return this.http.patch(`${this.base}`, { showInLiveFeed: show });
  }
}

/** Lit le code metier d'une HttpErrorResponse Nest ({ code, message }). */
export function apiErrorCode(err: unknown): string | null {
  const body = (err as { error?: unknown })?.error;
  if (body && typeof body === 'object') {
    const code = (body as { code?: unknown }).code;
    if (typeof code === 'string') return code;
  }
  return null;
}

export function apiErrorMessage(err: unknown): string | null {
  const body = (err as { error?: unknown })?.error;
  if (!body || typeof body !== 'object') return null;
  const msg = (body as { message?: unknown }).message;
  if (Array.isArray(msg)) return msg.map(String).join(', ');
  return typeof msg === 'string' && msg.trim() ? msg : null;
}
