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
}
