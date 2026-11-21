import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import {
  WinnerClaimCardComponent,
  formatClaimCode,
} from './winner-claim-card.component';
import {
  AuthService,
  normalizeReferralCode,
} from 'src/app/services/auth/auth.service';

describe('Winner claim card', () => {
  const raffleId = '665f1a2b3c4d5e6f7a8b9c0d';
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WinnerClaimCardComponent, TranslateModule.forRoot()],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('formats only real 6-digit codes', () => {
    expect(formatClaimCode('123456')).toBe('123 456');
    expect(formatClaimCode('12345')).toBeNull();
    expect(formatClaimCode('<b>1</b>')).toBeNull();
    expect(formatClaimCode(123456)).toBeNull();
  });

  it('shows the code hidden until the winner taps it', async () => {
    const fixture = TestBed.createComponent(WinnerClaimCardComponent);
    const card = fixture.componentInstance;
    card.raffleId = raffleId;
    const done = card.ngOnChanges();
    http
      .expectOne(`${environment.apiBaseUrl}/raffles/${raffleId}/winner-claim`)
      .flush({ raffleId, fulfillmentStatus: 'PENDING_VERIFICATION', claimCode: '654321', issuedAt: null, claimedAt: null });
    await done;
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).not.toContain('654 321');
    (el.querySelector('button.code') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(el.textContent).toContain('654 321');
  });

  it('shows nothing to an account that did not win (404)', async () => {
    const fixture = TestBed.createComponent(WinnerClaimCardComponent);
    const card = fixture.componentInstance;
    card.raffleId = raffleId;
    const done = card.ngOnChanges();
    http
      .expectOne(`${environment.apiBaseUrl}/raffles/${raffleId}/winner-claim`)
      .flush({ message: 'Not found' }, { status: 404, statusText: 'Not Found' });
    await done;
    fixture.detectChanges();
    expect(card.claim).toBeNull();
    expect(fixture.nativeElement.querySelector('.claim')).toBeNull();
  });

  it('never calls the API with a malformed raffle id', async () => {
    const card = TestBed.createComponent(WinnerClaimCardComponent).componentInstance;
    card.raffleId = '../admin';
    await card.ngOnChanges();
    http.expectNone(() => true);
  });

  describe('Google sign-up', () => {
    it('sends the referral code and the 18+ declaration', () => {
      const auth = TestBed.inject(AuthService);
      auth.loginWithGoogle('id-token', { referralCode: ' ab12cd ', isAdult: true }).subscribe();
      const req = http.expectOne(`${environment.apiBaseUrl}/auth/google`);
      expect(req.request.body).toEqual({ idToken: 'id-token', referralCode: 'AB12CD', isAdult: true });
      req.flush({ access_token: 'x' });
    });

    it('drops a malformed referral code instead of failing the sign-in', () => {
      expect(normalizeReferralCode('x'.repeat(30))).toBe('');
      expect(normalizeReferralCode('<script>')).toBe('');
      expect(normalizeReferralCode(undefined)).toBe('');
    });
  });
});
