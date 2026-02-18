import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DrawCard, UserSummary, HomeCategory } from './home.models';

@Injectable({ providedIn: 'root' })
export class HomeApiService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getUserSummary(): Observable<UserSummary> {
    return this.http.get<UserSummary>(`${this.baseUrl}/users/me`);
  }

  getCategories(): Observable<HomeCategory[]> {
    return of([{ id: 'all', label: 'All' }]);
  }
  private toCard(raw: any): DrawCard {
    const product = raw?.product ?? null;

    return {
      id: String(raw?._id ?? raw?.id ?? ''),
      title: String(product?.title ?? raw?.title ?? ''),
      subtitle: String(product?.description ?? raw?.subtitle ?? ''),
      imageUrl: product?.imageUrl ?? raw?.imageUrl ?? undefined,

      sold: Number(raw?.ticketsSold ?? raw?.sold ?? 0),
      total: Number(raw?.totalTickets ?? raw?.total ?? 0),

      // ✅ IMPORTANT: backend = endAt ; frontend = endsAt
      endsAt: raw?.endAt ?? raw?.endsAt ?? undefined,

      badgeText: raw?.badge ?? raw?.badgeText ?? undefined,
      badgeType: raw?.badgeType ?? undefined,
    };
  }

  getEndingSoon(categoryId: string): Observable<DrawCard[]> {
    const params = new HttpParams()
      .set('sort', 'endAt')
      .set('limit', '10')
      .set('category', categoryId || 'all');

    return this.http
      .get<any[]>(`${this.baseUrl}/raffles/public`, { params })
      .pipe(map((rows) => (rows ?? []).map((r) => this.toCard(r))));
  }

  getLiveRows(categoryId: string): Observable<DrawCard[]> {
    const params = new HttpParams()
      .set('sort', 'createdAt')
      .set('limit', '30')
      .set('category', categoryId || 'all');

    return this.http
      .get<any[]>(`${this.baseUrl}/raffles/public`, { params })
      .pipe(map((rows) => (rows ?? []).map((r) => this.toCard(r))));
  }
}
