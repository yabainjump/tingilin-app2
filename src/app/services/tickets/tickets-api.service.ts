import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface TicketDto {
  _id: string;
  raffleId: string;
  userId: string;
  transactionId: string;
  serial: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable({ providedIn: 'root' })
export class TicketsApiService {
  private base = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  myTickets() {
    return this.http.get<TicketDto[]>(`${this.base}/tickets/me`);
  }
}
