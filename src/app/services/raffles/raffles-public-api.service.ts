import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { toAbsoluteMediaUrl } from 'src/app/shared/utils/media-url';

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

  constructor(private http: HttpClient) {}

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
    return this.http
      .get<any>(`${this.baseUrl}/raffles/public/${id}`)
      .pipe(map((raw) => this.normalizeRaffle(raw)));
  }

  
}
