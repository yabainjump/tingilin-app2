import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { toAbsoluteMediaUrl } from 'src/app/shared/utils/media-url';

export type WinnerDto = {
  raffleId: string;
  drawnAt: string;
  prizeTitle: string;
  prizeImageUrl?: string;
  winnerName: string;
  avatar?: string;
  ticketCode: string;
  badgeTone?: 'pink' | 'gold' | 'violet';
};

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
          (rows ?? []).map((row: WinnerDto) => ({
            ...row,
            avatar:
              toAbsoluteMediaUrl(row?.avatar, this.baseUrl) ?? row?.avatar,
            prizeImageUrl:
              toAbsoluteMediaUrl(row?.prizeImageUrl, this.baseUrl) ??
              row?.prizeImageUrl,
          })),
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
