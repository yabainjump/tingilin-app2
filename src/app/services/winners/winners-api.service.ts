import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import {
  apiOriginFromBase,
  toAbsoluteMediaUrl,
} from 'src/app/shared/utils/media-url';

export type WinnerDto = {
  raffleId: string;
  drawnAt: string;
  prizeTitle: string;
  prizeImageUrl?: string;
  winnerName: string;
  avatar?: string;
  ticketCode: string;
  badgeTone?: 'pink' | 'gold' | 'violet';
  /** Lot effectivement remis au gagnant. */
  delivered?: boolean;
  /** Photo + temoignage publies avec l'accord du gagnant. */
  deliveryProof?: {
    imageUrl: string;
    testimonial: string;
    publishedAt: string | null;
  } | null;
};

/** N'accepte que les medias servis par l'API (jamais une URL arbitraire). */
export function normalizeWinner(row: WinnerDto, apiBaseUrl: string): WinnerDto {
  // Idempotent: accepte le chemin relatif renvoye par l'API ou l'URL deja
  // resolue sur l'origine de l'API (jamais un autre hote).
  const origin = apiOriginFromBase(apiBaseUrl);
  let proofPath = String(row?.deliveryProof?.imageUrl ?? '');
  if (origin && proofPath.startsWith(`${origin}/`)) {
    proofPath = proofPath.slice(origin.length);
  }
  return {
    ...row,
    avatar: toAbsoluteMediaUrl(row?.avatar, apiBaseUrl) ?? row?.avatar,
    prizeImageUrl:
      toAbsoluteMediaUrl(row?.prizeImageUrl, apiBaseUrl) ?? row?.prizeImageUrl,
    deliveryProof:
      row?.deliveryProof && proofPath.startsWith('/uploads/deliveries/')
        ? {
            imageUrl: toAbsoluteMediaUrl(proofPath, apiBaseUrl) ?? '',
            testimonial: String(row.deliveryProof.testimonial ?? '').slice(0, 280),
            publishedAt: row.deliveryProof.publishedAt ?? null,
          }
        : null,
  };
}

export type FairnessRevealed = {
  serverSeed: string | null;
  ticketCount: number;
  ticketsetHash: string;
  winningIndex: number;
  digest: string;
  committedBeforeDraw: boolean;
  revealedAt: string | null;
  drawnAt: string | null;
  winningTicketSerial: string | null;
  winnerUserId: string | null;
  orderedSerials: string[];
};

export type FairnessDto = {
  raffleId: string;
  status: string;
  algorithm: string;
  formula: string;
  commitment: string | null;
  revealed: FairnessRevealed | null;
  verified?: boolean;
  verificationIssues?: string[];
};

@Injectable({ providedIn: 'root' })
export class WinnersApiService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  list(limit = 20) {
    const params = new HttpParams().set('limit', String(limit));
    return this.http
      .get<any>(`${this.baseUrl}/raffles/winners/list`, { params })
      .pipe(
        map((res) => (Array.isArray(res) ? res : (res?.data ?? []))),
        map((rows) =>
          (rows ?? []).map((row: WinnerDto) => normalizeWinner(row, this.baseUrl)),
        ),
      );
  }

  // Preuve verifiable du tirage (commit-reveal).
  fairness(raffleId: string): Observable<FairnessDto> {
    return this.http.get<FairnessDto>(
      `${this.baseUrl}/raffles/${encodeURIComponent(raffleId)}/fairness`,
    );
  }
}
