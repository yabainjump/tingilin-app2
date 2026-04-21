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

  it('should request the combined home feed without category for the All filter', () => {
    service.getHomeFeed('all').subscribe();

    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}/raffles/home-feed`,
    );

    expect(req.request.params.has('category')).toBeFalse();
    req.flush({ endingSoon: [], liveRows: [] });
  });

  it('should reuse the cached home feed while the ttl is still valid', () => {
    service.getHomeFeed('general').subscribe();
    service.getHomeFeed('general').subscribe();

    const requests = httpMock.match(
      (request) =>
        request.url === `${environment.apiBaseUrl}/raffles/home-feed` &&
        request.params.get('category') === 'GENERAL',
    );

    expect(requests.length).toBe(1);
    requests[0].flush({ endingSoon: [], liveRows: [] });
  });

  it('should fall back to legacy endpoints when home-feed is rejected', () => {
    service.getHomeFeed('all').subscribe((feed) => {
      expect(feed.endingSoon).toEqual([]);
      expect(feed.liveRows).toEqual([]);
    });

    const combinedReq = httpMock.expectOne(
      `${environment.apiBaseUrl}/raffles/home-feed`,
    );
    combinedReq.flush(
      { message: 'legacy backend' },
      { status: 400, statusText: 'Bad Request' },
    );

    const endingSoonReq = httpMock.expectOne(
      `${environment.apiBaseUrl}/raffles/public?sort=endAt&limit=10`,
    );
    const liveRowsReq = httpMock.expectOne(
      `${environment.apiBaseUrl}/raffles/public?sort=createdAt&limit=30`,
    );

    endingSoonReq.flush([]);
    liveRowsReq.flush([]);
  });
});
