import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ParticipationOverviewRaffleDto {
  id: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  ticketPrice?: number;
  currency?: string;
  sold?: number;
  total?: number;
  status?: string;
  startAt?: string;
  endAt?: string;
  endsAt?: string;
}

export interface ParticipationOverviewItemDto {
  raffleId: string;
  ticketsCount: number;
  firstSerial?: string;
  lastTicketAt?: string;
  createdTs?: string;
  raffle?: ParticipationOverviewRaffleDto | null;
}

export interface ParticipationOverviewResponse {
  data: ParticipationOverviewItemDto[];
}

@Injectable({ providedIn: 'root' })
export class ParticipationsApiService {
  private base = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  overview(): Observable<ParticipationOverviewResponse> {
    return this.http.get<ParticipationOverviewResponse>(
      `${this.base}/participations/me/overview`,
    );
  }
}
