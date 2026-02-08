import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface AdminCreateRaffleRequest {
  publishNow?: boolean;
  product: {
    title: string;
    description?: string;
    imageUrl: string;      // dataUrl ou URL
    categoryId?: string;
    realValue?: number;
  };
  raffle: {
    ticketPrice: number;
    currency?: string;
    rules?: string;
    startAt?: string;
    endAt: string;
    totalTickets?: number;
    badge?: string;
  };
}

@Injectable({ providedIn: 'root' })
export class RafflesApiService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  adminCreateWithProduct(dto: AdminCreateRaffleRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/raffles/admin/create-with-product`, dto);
  }
}
