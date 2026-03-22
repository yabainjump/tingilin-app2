import { TestBed } from '@angular/core/testing';
import { ShareService } from './share.service';

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

  it('should build raffle share URL on frontend route', () => {
    const id = 'raffle id';
    const url = service.raffleShareUrl(id);

    const expectedOrigin = String(window.location.origin).replace(/\/+$/, '');
    expect(url).toBe(`${expectedOrigin}/raffle-details/raffle%20id`);
  });

  it('should build referral share URL on frontend register route', () => {
    const url = service.referralShareUrl('win-ab12');
    const expectedOrigin = String(window.location.origin).replace(/\/+$/, '');
    expect(url).toBe(
      `${expectedOrigin}/auth/register?ref=WIN-AB12&referralCode=WIN-AB12`,
    );
  });

  it('should build site share URL on frontend path', () => {
    const expectedOrigin = String(window.location.origin).replace(/\/+$/, '');
    expect(service.siteShareUrl('/landing')).toBe(`${expectedOrigin}/landing`);
    expect(service.siteShareUrl('raffle-details/abc')).toBe(
      `${expectedOrigin}/raffle-details/abc`,
    );
  });

  it('should build live share URL on frontend winners route', () => {
    const expectedOrigin = String(window.location.origin).replace(/\/+$/, '');
    expect(service.liveShareUrl()).toBe(`${expectedOrigin}/tabs/winners`);
  });
});
