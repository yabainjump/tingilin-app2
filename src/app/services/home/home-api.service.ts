import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DrawCard, HomeCategory, UserSummary } from './home.models';

@Injectable({ providedIn: 'root' })
export class HomeApiService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}
 getUserSummary(): Observable<UserSummary> {
    return this.http.get<any>(`${this.baseUrl}/home/summary`).pipe(
      map((res) => res?.data ?? res),
      map((u) => ({
        id: String(u.id ?? u._id ?? ''),
        firstName: u.firstName ?? u.firstname ?? 'User',
        lastName: u.lastName ?? u.lastname ?? '',
        balance: Number(u.balance ?? u.wallet ?? 0),
        avatarUrl: u.avatarUrl ?? u.avatar ?? null,
      })),
    );
  }

  getCategories(): Observable<HomeCategory[]> {
    return this.http.get<any>(`${this.baseUrl}/home/categories`).pipe(
      map((res) => res?.data ?? res),
      map((arr) =>
        (Array.isArray(arr) ? arr : []).map((c) => ({
          id: String(c.id ?? c._id ?? c.slug ?? 'all'),
          label: String(c.label ?? c.name ?? 'All'),
        })),
      ),
    );
  }

  getEndingSoon(categoryId: string): Observable<DrawCard[]> {
    const params = new HttpParams().set('category', categoryId);
    return this.http.get<any>(`${this.baseUrl}/draws/ending-soon`, { params }).pipe(
      map((res) => res?.data ?? res),
      map((arr) => (Array.isArray(arr) ? arr : []).map((x) => this.normalizeDraw(x))),
    );
  }

  getLiveRows(categoryId: string): Observable<DrawCard[]> {
    const params = new HttpParams().set('category', categoryId);
    return this.http.get<any>(`${this.baseUrl}/draws/live`, { params }).pipe(
      map((res) => res?.data ?? res),
      map((arr) => (Array.isArray(arr) ? arr : []).map((x) => this.normalizeDraw(x))),
    );
  }

  private normalizeDraw(x: any): DrawCard {
    const sold = Number(x.sold ?? x.ticketsSold ?? x.soldTickets ?? 0);
    const total = Number(x.total ?? x.ticketsTotal ?? x.totalTickets ?? 0);

    return {
      id: String(x.id ?? x._id ?? ''),
      title: String(x.title ?? x.name ?? 'Untitled'),
      subtitle: x.subtitle ?? x.description ?? x.variant ?? '',
      imageUrl: x.imageUrl ?? x.image ?? x.cover ?? null,

      sold,
      total,

      endsAt: x.endsAt ?? x.endAt ?? x.closesAt ?? null,

      badgeText: x.badgeText ?? x.tag ?? null,
      badgeType: x.badgeType ?? 'warn',
    };
  }
}
