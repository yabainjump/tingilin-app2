import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import {
  Observable,
  catchError,
  forkJoin,
  from,
  map,
  mergeMap,
  of,
  shareReplay,
  tap,
  throwError,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { DrawCard, UserSummary } from './home.models';
import { HOME_CATEGORY_OPTIONS } from 'src/app/core/constants/raffle-categories';
import { toAbsoluteMediaUrl } from 'src/app/shared/utils/media-url';
import { AppStorageService } from 'src/app/shared/storage/app-storage.service';
import { NetworkStatusService } from '../offline/network-status.service';

type HomeCategory = { id: string; label: string };
type HomeFeed = { endingSoon: DrawCard[]; liveRows: DrawCard[] };
type HomeFeedResponse = { endingSoon?: any[]; liveRows?: any[] };
type CachedHomeFeed = {
  expiresAt: number;
  value$: Observable<HomeFeed>;
};
type StoredHomeFeed = {
  savedAt: string;
  value: HomeFeed;
};

@Injectable({ providedIn: 'root' })
export class HomeApiService {
  private readonly baseUrl = environment.apiBaseUrl;
  private readonly homeFeedCache = new Map<string, CachedHomeFeed>();
  private readonly homeFeedTtlMs = 45_000;
  private readonly storagePrefix = 'offline:home-feed:';

  constructor(
    private http: HttpClient,
    private storage: AppStorageService,
    private networkStatus: NetworkStatusService,
  ) {}

  private normalizeCategoryId(
    categoryId: string | null | undefined,
  ): string | null {
    const normalized = String(categoryId ?? '').trim();
    if (!normalized) return null;
    if (normalized.toLowerCase() === 'all') return null;
    return normalized.toUpperCase();
  }

  private buildPublicRafflesParams(
    sort: 'endAt' | 'createdAt',
    limit: number,
    categoryId: string,
  ): HttpParams {
    let params = new HttpParams().set('sort', sort).set('limit', String(limit));

    const normalizedCategoryId = this.normalizeCategoryId(categoryId);
    if (normalizedCategoryId) {
      params = params.set('category', normalizedCategoryId);
    }

    return params;
  }

  private buildHomeFeedParams(categoryId: string): HttpParams {
    let params = new HttpParams();
    const normalizedCategoryId = this.normalizeCategoryId(categoryId);
    if (normalizedCategoryId) {
      params = params.set('category', normalizedCategoryId);
    }
    return params;
  }

  private homeFeedCacheKey(categoryId: string): string {
    return this.normalizeCategoryId(categoryId) ?? 'ALL';
  }

  // Header user
  getUserSummary(): Observable<UserSummary> {
    return this.http.get<UserSummary>(`${this.baseUrl}/users/me`).pipe(
      map((raw: any) => {
        const avatarUrl = toAbsoluteMediaUrl(
          raw?.avatarUrl ?? raw?.avatar,
          this.baseUrl,
        );
        const avatar = toAbsoluteMediaUrl(
          raw?.avatar ?? raw?.avatarUrl,
          this.baseUrl,
        );

        return {
          ...raw,
          avatarUrl: avatarUrl ?? raw?.avatarUrl,
          avatar: avatar ?? raw?.avatar,
        } as UserSummary;
      }),
    );
  }

  // Categories (mock)
  getCategories(): Observable<HomeCategory[]> {
    return of(HOME_CATEGORY_OPTIONS);
  }

  getHomeFeed(
    categoryId: string,
    options?: { forceRefresh?: boolean },
  ): Observable<HomeFeed> {
    const cacheKey = this.homeFeedCacheKey(categoryId);
    const now = Date.now();
    const cached = this.homeFeedCache.get(cacheKey);

    if (!options?.forceRefresh && cached && cached.expiresAt > now) {
      return cached.value$;
    }

    const params = this.buildHomeFeedParams(categoryId);
    const request$ = this.http
      .get<HomeFeedResponse>(`${this.baseUrl}/raffles/home-feed`, { params })
      .pipe(
        map((res) => ({
          endingSoon: (res?.endingSoon ?? []).map((row) => this.toCard(row)),
          liveRows: (res?.liveRows ?? []).map((row) => this.toCard(row)),
        })),
        tap((feed) => void this.persistHomeFeed(cacheKey, feed)),
        catchError((error) =>
          this.recoverHomeFeed(error, categoryId, cacheKey),
        ),
        shareReplay({ bufferSize: 1, refCount: false }),
      );

    const preferStored =
      !options?.forceRefresh &&
      (this.networkStatus.isOffline() || this.networkStatus.isConstrained());
    const value$ = preferStored
      ? this.loadStoredHomeFeed(cacheKey).pipe(
          mergeMap((cached) => (cached ? of(cached.value) : request$)),
          shareReplay({ bufferSize: 1, refCount: false }),
        )
      : request$;

    this.homeFeedCache.set(cacheKey, {
      expiresAt: now + this.homeFeedTtlMs,
      value$: value$,
    });

    return value$;
  }

  // ✅ Nettoyage URL (évite /null 404)
  private cleanUrl(u: any): string | undefined {
    return toAbsoluteMediaUrl(u, this.baseUrl);
  }

  // ✅ ICI on fait EXACTEMENT le mapping comme raffle-details
  private toCard(raw: any): DrawCard {
    const product = raw?.product ?? raw?.productId ?? raw?.productRef ?? {};
    const mappedPrice = Number(
      raw?.ticketPrice ??
        raw?.ticket_price ??
        raw?.price ??
        product?.ticketPrice ??
        0,
    );
    const mappedCurrency = String(
      raw?.currency ?? raw?.ticketCurrency ?? product?.currency ?? 'XAF',
    );

    return {
      id: String(raw?._id ?? raw?.id ?? ''),
      title: String(product?.title ?? raw?.title ?? '—'),
      subtitle: String(product?.description ?? raw?.subtitle ?? ''),
      imageUrl: this.cleanUrl(
        product?.imageUrl ?? product?.image ?? raw?.imageUrl ?? raw?.image,
      ),
      categoryId:
        String(product?.categoryId ?? raw?.categoryId ?? '').toUpperCase() ||
        undefined,

      // ✅ sold/total corrects (sinon tu vois 0/0)
      sold: Number(raw?.ticketsSold ?? raw?.sold ?? 0),
      total: Number(raw?.totalTickets ?? raw?.total ?? 0),

      // ✅ LE POINT IMPORTANT : prix + monnaie
      ticketPrice: Number.isFinite(mappedPrice) ? mappedPrice : 0,
      currency: mappedCurrency || 'XAF',

      // ✅ date fin (ton modèle s’appelle endsAt côté front)
      startAt: raw?.startAt ?? undefined,
      endsAt: raw?.endAt ?? raw?.endsAt ?? undefined,

      badgeText: raw?.badge ?? raw?.badgeText ?? undefined,
      badgeType: raw?.badgeType ?? 'warn',
    };
  }

  // Ending soon
  getEndingSoon(categoryId: string): Observable<DrawCard[]> {
    const params = this.buildPublicRafflesParams('endAt', 10, categoryId);

    // ✅ IMPORTANT : on map ici
    return this.http
      .get<any[]>(`${this.baseUrl}/raffles/public`, { params })
      .pipe(map((rows) => (rows ?? []).map((r) => this.toCard(r))));
  }

  // Live rows
  getLiveRows(categoryId: string): Observable<DrawCard[]> {
    const params = this.buildPublicRafflesParams('createdAt', 30, categoryId);

    // ✅ IMPORTANT : on map ici
    return this.http
      .get<any[]>(`${this.baseUrl}/raffles/public`, { params })
      .pipe(map((rows) => (rows ?? []).map((r) => this.toCard(r))));
  }

  private loadLegacyHomeFeed(categoryId: string): Observable<HomeFeed> {
    return forkJoin({
      endingSoon: this.getEndingSoon(categoryId),
      liveRows: this.getLiveRows(categoryId),
    });
  }

  private async persistHomeFeed(
    cacheKey: string,
    feed: HomeFeed,
  ): Promise<void> {
    const payload: StoredHomeFeed = {
      savedAt: new Date().toISOString(),
      value: feed,
    };
    await this.storage.setJson(`${this.storagePrefix}${cacheKey}`, payload);
  }

  private loadStoredHomeFeed(
    cacheKey: string,
  ): Observable<StoredHomeFeed | null> {
    return from(
      this.storage.getJson<StoredHomeFeed>(`${this.storagePrefix}${cacheKey}`),
    );
  }

  private recoverHomeFeed(
    error: unknown,
    categoryId: string,
    cacheKey: string,
  ): Observable<HomeFeed> {
    const status = error instanceof HttpErrorResponse ? error.status : 0;
    const recovery$ = [404, 405].includes(status)
      ? this.loadLegacyHomeFeed(categoryId).pipe(
          tap((feed) => void this.persistHomeFeed(cacheKey, feed)),
        )
      : throwError(() => error);

    return recovery$.pipe(
      catchError((recoveryError) =>
        this.loadStoredHomeFeed(cacheKey).pipe(
          mergeMap((cached) =>
            cached ? of(cached.value) : throwError(() => recoveryError),
          ),
        ),
      ),
    );
  }
}
