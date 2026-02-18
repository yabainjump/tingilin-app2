import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface RaffleDetailsDto {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;

  ticketPrice?: number;
  currency?: string;

  sold?: number;
  total?: number;

  endsAt?: string;   // ISO
  badgeText?: string;
  badgeType?: 'danger' | 'warn' | 'hot';

  description?: string;
  status?: string;
}

@Injectable({ providedIn: 'root' })
export class RafflesPublicApiService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getById(id: string): Observable<RaffleDetailsDto> {
    return this.http.get<RaffleDetailsDto>(`${this.baseUrl}/raffles/public/${id}`);
  }
}
