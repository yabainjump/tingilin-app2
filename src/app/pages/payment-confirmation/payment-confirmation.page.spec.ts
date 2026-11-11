import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  fakeAsync,
  flushMicrotasks,
  tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { convertToParamMap, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { PaymentConfirmationPage } from './payment-confirmation.page';

describe('PaymentConfirmationPage', () => {
  let component: PaymentConfirmationPage;
  let fixture: ComponentFixture<PaymentConfirmationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentConfirmationPage],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: 'test-id',
                raffleId: 'test-id',
              }),
              queryParamMap: convertToParamMap({}),
            },
            paramMap: of(
              convertToParamMap({ id: 'test-id', raffleId: 'test-id' }),
            ),
            queryParamMap: of(convertToParamMap({})),
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('normalizes local and international Cameroon phone numbers', () => {
    const normalize = (component as any).normalizeCameroonPhone.bind(component);

    expect(normalize('691 224 472')).toBe('237691224472');
    expect(normalize('+237 691 224 472')).toBe('237691224472');
    expect(normalize('00237-691-224-472')).toBe('237691224472');
    expect(normalize('1234')).toBeUndefined();
  });

  it('allows only trusted HTTPS payment fallback hosts', () => {
    const safeLink = (component as any).safePaymentLink.bind(component);

    expect(
      safeLink('https://checkout.flutterwave.com/v3/hosted/pay/test'),
    ).toBe('https://checkout.flutterwave.com/v3/hosted/pay/test');
    expect(
      safeLink('http://checkout.flutterwave.com/pay/test'),
    ).toBeUndefined();
    expect(safeLink('https://evil.example/pay/test')).toBeUndefined();
  });

  it('stops local payment polling when the user cancels waiting', () => {
    component.directChargePending = true;
    component.paymentOverlayVisible = true;
    component.paymentOverlayState = 'WAITING';
    (component as any).verificationTimer = setTimeout(() => undefined, 10_000);

    component.cancelPaymentWaiting();

    expect(component.paymentOverlayState).toBe('CANCELLED');
    expect(component.paymentOverlayVisible).toBeTrue();
    expect(component.directChargePending).toBeTrue();
    expect((component as any).verificationTimer).toBeUndefined();
  });

  it('does not close a payment overlay while payment is in progress', () => {
    component.paymentOverlayVisible = true;
    component.paymentOverlayState = 'WAITING';

    component.closePaymentOverlay();

    expect(component.paymentOverlayVisible).toBeTrue();
  });

  it('expires the waiting popup automatically after ten minutes', fakeAsync(() => {
    component.transactionId = 'transaction-id';
    component.directChargePending = true;
    component.paymentOverlayVisible = true;
    component.paymentOverlayState = 'WAITING';
    component.paymentExpiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();
    spyOn(component, 'verifyPayment').and.resolveTo('PENDING');

    (component as any).startVerificationPolling();
    tick(10 * 60 * 1000);
    flushMicrotasks();

    expect(component.paymentOverlayState).toBe('EXPIRED');
    expect(component.paymentStatus).toBe('EXPIRED');
    expect(component.directChargePending).toBeFalse();
    expect(component.paymentOverlayVisible).toBeTrue();
  }));

  it('uses the local placeholder when the product image is missing', () => {
    const image = document.createElement('img');
    image.src = 'https://backend.example.test/uploads/missing.webp';

    component.onProductImageError({ target: image } as unknown as Event);

    expect(image.getAttribute('src')).toBe('assets/img/placeholder.png');
  });
});
