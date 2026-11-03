import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NetworkStatusService } from '../offline/network-status.service';
import { AppStorageService } from 'src/app/shared/storage/app-storage.service';
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
});
