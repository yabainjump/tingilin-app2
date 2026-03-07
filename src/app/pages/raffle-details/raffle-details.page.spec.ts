import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { AlertController, IonicModule, NavController, ToastController } from '@ionic/angular';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RafflesPublicApiService } from 'src/app/services/raffles/raffles-public-api.service';
import { ReferralApiService } from 'src/app/services/referral/referral-api.service';
import { ShareService } from 'src/app/services/share/share.service';
import { WinnersApiService } from 'src/app/services/winners/winners-api.service';
import { PaymentsApiService } from 'src/app/core/api/payments-api.service';
import { RaffleDetailsPage } from './raffle-details.page';

describe('RaffleDetailsPage', () => {
  let component: RaffleDetailsPage;
  let fixture: ComponentFixture<RaffleDetailsPage>;
  let router: jasmine.SpyObj<Router>;
  let auth: jasmine.SpyObj<AuthService>;
  let alertController: jasmine.SpyObj<AlertController>;
  let shareService: jasmine.SpyObj<ShareService>;
  let referralApi: jasmine.SpyObj<ReferralApiService>;
  let paymentsApi: jasmine.SpyObj<PaymentsApiService>;

  beforeEach(async () => {
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    router.navigate.and.resolveTo(true);

    auth = jasmine.createSpyObj<AuthService>('AuthService', ['isLoggedIn']);
    alertController = jasmine.createSpyObj<AlertController>('AlertController', ['create']);
    alertController.create.and.resolveTo({
      present: async () => undefined,
    } as any);

    shareService = jasmine.createSpyObj<ShareService>('ShareService', [
      'share',
      'raffleShareUrl',
    ]);
    shareService.share.and.resolveTo('shared');
    shareService.raffleShareUrl.and.returnValue('http://localhost:3000/share/raffle/test-id');
    referralApi = jasmine.createSpyObj<ReferralApiService>('ReferralApiService', [
      'summary',
    ]);
    referralApi.summary.and.returnValue(
      of({
        freeTicketsBalance: 0,
      } as any),
    );
    paymentsApi = jasmine.createSpyObj<PaymentsApiService>('PaymentsApiService', [
      'useFreeTicket',
    ]);
    paymentsApi.useFreeTicket.and.returnValue(of({ ok: true } as any));

    await TestBed.configureTestingModule({
      declarations: [RaffleDetailsPage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: Router, useValue: router },
        { provide: AuthService, useValue: auth },
        { provide: AlertController, useValue: alertController },
        { provide: ShareService, useValue: shareService },
        { provide: ReferralApiService, useValue: referralApi },
        { provide: PaymentsApiService, useValue: paymentsApi },
        { provide: NavController, useValue: jasmine.createSpyObj('NavController', ['back']) },
        {
          provide: ToastController,
          useValue: {
            create: async () => ({ present: async () => undefined }),
          },
        },
        {
          provide: RafflesPublicApiService,
          useValue: {
            getById: () => of(null),
          },
        },
        {
          provide: WinnersApiService,
          useValue: {
            list: () => of([]),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: 'test-id' }),
            },
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(RaffleDetailsPage);
    component = fixture.componentInstance;
    component.raffle = {
      id: 'test-id',
      title: 'MacBook Pro',
      ticketPrice: 100,
      currency: 'XAF',
      status: 'LIVE' as any,
    } as any;
    component.loading = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ask auth when guest tries to buy ticket', async () => {
    auth.isLoggedIn.and.returnValue(false);

    await component.goToPayment();

    expect(alertController.create).toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalledWith(['/tabs/payment-confirmation'], jasmine.anything());
  });

  it('should show free ticket CTA when logged in with balance', () => {
    auth.isLoggedIn.and.returnValue(true);
    component.freeTicketsBalance = 2;

    expect(component.hasFreeTickets).toBeTrue();
    expect(component.canUseFreeTicket).toBeTrue();
  });

  it('should consume free ticket and navigate to ticket details', async () => {
    auth.isLoggedIn.and.returnValue(true);
    component.freeTicketsBalance = 1;

    await component.useFreeTicket();

    expect(paymentsApi.useFreeTicket).toHaveBeenCalledWith('test-id');
    expect(component.freeTicketsBalance).toBe(0);
    expect(router.navigate).toHaveBeenCalledWith(['/tabs/ticket-details', 'test-id']);
  });

  it('should navigate to payment when user is logged in', async () => {
    auth.isLoggedIn.and.returnValue(true);
    component.qty = 2;

    await component.goToPayment();

    expect(router.navigate).toHaveBeenCalledWith(['/tabs/payment-confirmation'], {
      queryParams: jasmine.objectContaining({
        raffleId: 'test-id',
        qty: 2,
        unit: 100,
        amount: 200,
      }),
    });
  });

  it('should build and share raffle link', async () => {
    await component.share();

    expect(shareService.raffleShareUrl).toHaveBeenCalledWith('test-id');
    expect(shareService.share).toHaveBeenCalled();
  });
});
