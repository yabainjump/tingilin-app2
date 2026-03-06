import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AdminCreateRaffleRequest {
  publishNow?: boolean;
  product: {
    title: string;
    description?: string;
    imageUrl: string; // dataUrl ou URL
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

export interface RaffleDetailsDto {
  _id: string;
  ticketPrice: number;
  currency: string;
  totalTickets: number;
  ticketsSold: number;
  startAt?: string;
  endAt?: string;
  rules?: string;
  badge?: string;
  product?: {
    _id: string;
    title: string;
    imageUrl?: string;
    description?: string;
  };
}

@Injectable({ providedIn: 'root' })
export class RafflesApiService {
  private readonly baseUrl = environment.apiBaseUrl;
  private refresh$ = new BehaviorSubject<void>(undefined);

  constructor(private http: HttpClient) {}

  adminCreateWithProduct(dto: AdminCreateRaffleRequest): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/raffles/admin/create-with-product`,
      dto,
    );
    }

    triggerRefresh(){
      this.refresh$.next();
    }

  getPublicById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/raffles/public/${id}`);
  }
}
