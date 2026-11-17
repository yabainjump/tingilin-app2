import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { toAbsoluteMediaUrl } from 'src/app/shared/utils/media-url';

export type TrustStatsDto = {
  winners: number;
  prizesDelivered: number;
  deliveryProofs: number;
  verifiableDraws: number;
  prizesValueXaf: number;
  currency: string;
};

export type PollOptionDto = {
  id: string;
  label: string;
  imageUrl: string;
  votes: number;
  percent: number;
};

export type PollDto = {
  id: string;
  question: string;
  description: string;
  endsAt: string | null;
  totalVotes: number;
  options: PollOptionDto[];
};

/** Chiffres de confiance publics + sondage "choisis le prochain lot". */
@Injectable({ providedIn: 'root' })
export class EngagementApiService {
  private readonly base = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  trustStats(): Observable<TrustStatsDto> {
    return this.http.get<TrustStatsDto>(`${this.base}/raffles/trust-stats`);
  }

  activePoll(): Observable<PollDto | null> {
    return this.http
      .get<{ poll: PollDto | null }>(`${this.base}/polls/active`)
      .pipe(map((res) => this.normalizePoll(res?.poll ?? null)));
  }

  myVote(): Observable<{ pollId: string | null; optionId: string | null }> {
    return this.http.get<{ pollId: string | null; optionId: string | null }>(
      `${this.base}/polls/active/me`,
    );
  }

  vote(pollId: string, optionId: string): Observable<PollDto | null> {
    return this.http
      .post<{ poll: PollDto | null }>(
        `${this.base}/polls/${encodeURIComponent(pollId)}/vote`,
        { optionId },
      )
      .pipe(map((res) => this.normalizePoll(res?.poll ?? null)));
  }

  private normalizePoll(poll: PollDto | null): PollDto | null {
    if (!poll) return null;
    return {
      ...poll,
      options: (poll.options ?? []).map((o) => ({
        ...o,
        // Seules les images servies par l'API sont affichees.
        imageUrl: String(o.imageUrl ?? '').startsWith('/uploads/')
          ? (toAbsoluteMediaUrl(o.imageUrl, this.base) ?? '')
          : '',
      })),
    };
  }
}
