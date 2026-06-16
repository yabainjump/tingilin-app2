import { TestBed } from '@angular/core/testing';
import { ShareService } from './share.service';
import { environment } from 'src/environments/environment';

// Origine du backend, derivee de apiBaseUrl comme dans le service.
const apiOrigin = (() => {
  try {
    const u = new URL(environment.apiBaseUrl);
    return `${u.protocol}//${u.host}`;
  } catch {
    return String(environment.apiBaseUrl)
      .replace(/\/api\/v1\/?$/i, '')
      .replace(/\/+$/, '');
  }
})();

describe('ShareService', () => {
  let service: ShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareService],
    });
    service = TestBed.inject(ShareService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should build raffle share URL on the backend /share route (Open Graph)', () => {
    const url = service.raffleShareUrl('raffle id');
    expect(url).toBe(`${apiOrigin}/share/raffle/raffle%20id`);
  });

  it('should build referral share URL on the backend /share route', () => {
    const url = service.referralShareUrl('win-ab12');
    expect(url).toBe(`${apiOrigin}/share/referral/WIN-AB12`);
  });

  it('should build site share URL on the backend /share route', () => {
    expect(service.siteShareUrl('/landing')).toBe(
      `${apiOrigin}/share/site?to=%2Flanding`,
    );
    expect(service.siteShareUrl('raffle-details/abc')).toBe(
      `${apiOrigin}/share/site?to=%2Fraffle-details%2Fabc`,
    );
  });

  it('should build live share URL on the backend /share route', () => {
    expect(service.liveShareUrl()).toBe(`${apiOrigin}/share/live`);
  });
});
