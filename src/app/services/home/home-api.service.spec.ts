import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HomeApiService } from './home-api.service';
import { environment } from 'src/environments/environment';

describe('HomeApiService', () => {
  let service: HomeApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(HomeApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should omit the category parameter for the All filter', () => {
    service.getEndingSoon('all').subscribe();

    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}/raffles/public?sort=endAt&limit=10`,
    );

    expect(req.request.params.has('category')).toBeFalse();
    req.flush([]);
  });

  it('should normalize non-All categories before requesting public raffles', () => {
    service.getLiveRows('general').subscribe();

    const req = httpMock.expectOne(
      (request) =>
        request.url === `${environment.apiBaseUrl}/raffles/public` &&
        request.params.get('sort') === 'createdAt' &&
        request.params.get('limit') === '30' &&
        request.params.get('category') === 'GENERAL',
    );

    req.flush([]);
  });
});
