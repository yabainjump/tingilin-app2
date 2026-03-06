import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DrawCard, UserSummary } from './home.models';

type HomeCategory = { id: string; label: string };

@Injectable({ providedIn: 'root' })
export class HomeApiService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // Header user
  getUserSummary(): Observable<UserSummary> {
    return this.http.get<UserSummary>(`${this.baseUrl}/users/me`);
  }

  // Categories (mock)
  getCategories(): Observable<HomeCategory[]> {
    return new Observable((sub) => {
      sub.next([{ id: 'all', label: 'All' }]);
      sub.complete();
    });
  }

  // ✅ Nettoyage URL (évite /null 404)
  private cleanUrl(u: any): string | undefined {
    const s = String(u ?? '').trim();
    if (!s || s === 'null' || s === 'undefined') return undefined;
    return s;
  }

  // ✅ ICI on fait EXACTEMENT le mapping comme raffle-details
  private toCard(raw: any): DrawCard {
    const product = raw?.product ?? raw?.productId ?? raw?.productRef ?? {};

    return {
      id: String(raw?._id ?? raw?.id ?? ''),
      title: String(product?.title ?? raw?.title ?? '—'),
      subtitle: String(product?.description ?? raw?.subtitle ?? ''),
      imageUrl: this.cleanUrl(product?.imageUrl ?? raw?.imageUrl),

      // ✅ sold/total corrects (sinon tu vois 0/0)
      sold: Number(raw?.ticketsSold ?? raw?.sold ?? 0),
      total: Number(raw?.totalTickets ?? raw?.total ?? 0),

      // ✅ LE POINT IMPORTANT : prix + monnaie
      ticketPrice: Number(raw?.ticketPrice ?? 0),
      currency: String(raw?.currency ?? 'XAF'),

      // ✅ date fin (ton modèle s’appelle endsAt côté front)
      startAt: raw?.startAt ?? undefined,
      endsAt: raw?.endAt ?? raw?.endsAt ?? undefined,

      badgeText: raw?.badge ?? raw?.badgeText ?? undefined,
      badgeType: raw?.badgeType ?? 'warn',
    };
  }

  // Ending soon
  getEndingSoon(categoryId: string): Observable<DrawCard[]> {
    const params = new HttpParams()
      .set('sort', 'endAt')
      .set('limit', '10')
      .set('category', categoryId || 'all');

    // ✅ IMPORTANT : on map ici
    return this.http
      .get<any[]>(`${this.baseUrl}/raffles/public`, { params })
      .pipe(map((rows) => (rows ?? []).map((r) => this.toCard(r))));
  }

  // Live rows
  getLiveRows(categoryId: string): Observable<DrawCard[]> {
    const params = new HttpParams()
      .set('sort', 'createdAt')
      .set('limit', '30')
      .set('category', categoryId || 'all');

    // ✅ IMPORTANT : on map ici
    return this.http
      .get<any[]>(`${this.baseUrl}/raffles/public`, { params })
      .pipe(map((rows) => (rows ?? []).map((r) => this.toCard(r))));
  }
}
