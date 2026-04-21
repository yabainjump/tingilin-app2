import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, map, mergeMap, of, tap, throwError, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { toAbsoluteMediaUrl } from 'src/app/shared/utils/media-url';
import { AppStorageService } from 'src/app/shared/storage/app-storage.service';
import { NetworkStatusService } from '../offline/network-status.service';

export interface RaffleDetailsDto {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  product?: {
    imageUrl?: string;
    [key: string]: any;
  };

  ticketPrice?: number;
  currency?: string;

  sold?: number;
  total?: number;

  startAt?: string; // ISO
  endsAt?: string;   // ISO
  endAt?: string;    // ISO (compat backend)
  badgeText?: string;
  badgeType?: 'danger' | 'warn' | 'hot';

  description?: string;
  status?: string;
}

@Injectable({ providedIn: 'root' })
export class RafflesPublicApiService {
  private readonly baseUrl = environment.apiBaseUrl;
  private readonly storagePrefix = 'offline:raffle-details:';

  constructor(
    private http: HttpClient,
    private storage: AppStorageService,
    private networkStatus: NetworkStatusService,
  ) {}

  private normalizeRaffle(raw: any): RaffleDetailsDto {
    const topImage = toAbsoluteMediaUrl(raw?.imageUrl ?? raw?.image, this.baseUrl);
    const productImage = toAbsoluteMediaUrl(
      raw?.product?.imageUrl ?? raw?.product?.image,
      this.baseUrl,
    );

    return {
      ...raw,
      id: String(raw?._id ?? raw?.id ?? ''),
      imageUrl: topImage ?? productImage ?? raw?.imageUrl,
      product: raw?.product
        ? {
            ...raw.product,
            imageUrl: productImage ?? raw.product.imageUrl,
            image: productImage ?? raw.product.image,
          }
        : raw?.product,
    } as RaffleDetailsDto;
  }

  getById(id: string): Observable<RaffleDetailsDto> {
    const request$ = this.http
      .get<any>(`${this.baseUrl}/raffles/public/${id}`)
      .pipe(
        map((raw) => this.normalizeRaffle(raw)),
        tap((raffle) => void this.persistRaffle(id, raffle)),
        catchError((error) =>
          this.loadStoredRaffle(id).pipe(
            mergeMap((cached) =>
              cached ? of(cached.value) : throwError(() => error),
            ),
          ),
        ),
      );

    if (this.networkStatus.isOffline()) {
      return this.loadStoredRaffle(id).pipe(
        mergeMap((cached) => (cached ? of(cached.value) : request$)),
      );
    }

    return request$;
  }

  private async persistRaffle(
    id: string,
    raffle: RaffleDetailsDto,
  ): Promise<void> {
    await this.storage.setJson(`${this.storagePrefix}${id}`, {
      savedAt: new Date().toISOString(),
      value: raffle,
    });
  }

  private loadStoredRaffle(
    id: string,
  ): Observable<{ savedAt: string; value: RaffleDetailsDto } | null> {
    return from(
      this.storage.getJson<{ savedAt: string; value: RaffleDetailsDto }>(
        `${this.storagePrefix}${id}`,
      ),
    );
  }
}
