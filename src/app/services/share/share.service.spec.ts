import { TestBed } from '@angular/core/testing';
import { ShareService } from './share.service';
import { environment } from 'src/environments/environment';

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

  it('should build raffle share URL from API base URL', () => {
    const id = 'raffle id';
    const url = service.raffleShareUrl(id);

    const expectedOrigin = new URL(environment.apiBaseUrl).origin;
    expect(url).toBe(`${expectedOrigin}/share/raffle/raffle%20id`);
  });
});
