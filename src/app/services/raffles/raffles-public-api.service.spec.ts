import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NetworkStatusService } from '../offline/network-status.service';
import { AppStorageService } from 'src/app/shared/storage/app-storage.service';
import { apiOriginFromBase } from 'src/app/shared/utils/media-url';
import { RafflesPublicApiService } from './raffles-public-api.service';

describe('RafflesPublicApiService', () => {
  let service: RafflesPublicApiService;
  let http: HttpTestingController;
  let storage: jasmine.SpyObj<AppStorageService>;
  let networkStatus: jasmine.SpyObj<NetworkStatusService>;

  beforeEach(() => {
    storage = jasmine.createSpyObj<AppStorageService>('AppStorageService', [
      'getJson',
      'setJson',
    ]);
    storage.getJson.and.resolveTo({
      savedAt: '2026-11-01T00:00:00.000Z',
      value: { id: 'raffle-1', title: 'Ancienne copie', status: 'DRAWN' },
    });
    storage.setJson.and.resolveTo();

    networkStatus = jasmine.createSpyObj<NetworkStatusService>(
      'NetworkStatusService',
      ['isOffline'],
    );
    networkStatus.isOffline.and.returnValue(false);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RafflesPublicApiService,
        { provide: AppStorageService, useValue: storage },
        { provide: NetworkStatusService, useValue: networkStatus },
      ],
    });

    service = TestBed.inject(RafflesPublicApiService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('does not hide a 404 behind a stale offline raffle', async () => {
    const promise = firstValueFrom(service.getById('raffle-1'));
    const request = http.expectOne(
      `${environment.apiBaseUrl}/raffles/public/raffle-1`,
    );
    request.flush(
      { message: 'Raffle not found' },
      { status: 404, statusText: 'Not Found' },
    );

    await expectAsync(promise).toBeRejected();
    expect(storage.getJson).not.toHaveBeenCalled();
  });

  it('keeps the offline fallback for a network failure', async () => {
    const promise = firstValueFrom(service.getById('raffle-1'));
    const request = http.expectOne(
      `${environment.apiBaseUrl}/raffles/public/raffle-1`,
    );
    request.error(new ProgressEvent('network error'));

    await expectAsync(promise).toBeResolvedTo(
      jasmine.objectContaining({ status: 'DRAWN' }),
    );
  });

  it('normalizes the public product title, description and first image', async () => {
    const promise = firstValueFrom(service.getById('raffle-1'));
    const request = http.expectOne(
      `${environment.apiBaseUrl}/raffles/public/raffle-1`,
    );
    request.flush({
      _id: 'raffle-1',
      rules: 'Règlement du raffle',
      product: {
        title: 'Smartphone premium',
        description: 'Un téléphone puissant avec une grande autonomie.',
        images: ['/uploads/products/smartphone.webp'],
      },
    });

    const result = await promise;

    expect(result).toEqual(
      jasmine.objectContaining({
        id: 'raffle-1',
        title: 'Smartphone premium',
        description: 'Un téléphone puissant avec une grande autonomie.',
        imageUrl: `${apiOriginFromBase(environment.apiBaseUrl)}/uploads/products/smartphone.webp`,
      }),
    );
    expect(storage.setJson).toHaveBeenCalled();
  });
});
