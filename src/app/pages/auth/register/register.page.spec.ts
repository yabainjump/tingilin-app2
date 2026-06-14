import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, ToastController } from '@ionic/angular';
import { of } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';
import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: Router;

  beforeEach(async () => {
    authService = jasmine.createSpyObj<AuthService>('AuthService', ['register']);
    authService.register.and.returnValue(
      of({
        access_token: 'test.access.token',
        refresh_token: 'test.refresh.token',
      }),
    );

    await TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: AuthService, useValue: authService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: convertToParamMap({
                redirect: '/raffle-details/test-raffle',
              }),
            },
          },
        },
        {
          provide: ToastController,
          useValue: {
            create: async () => ({ present: async () => undefined }),
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    router = TestBed.inject(Router);
    spyOn(router, 'navigate').and.resolveTo(true);

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to onboarding after successful register', async () => {
    component.form.patchValue({
      lastName: 'Doe',
      firstName: 'Jane',
      username: 'janedoe',
      email: 'jane@example.com',
      countryCode: '+237',
      phone: '699123456',
      country: 'CM',
      city: 'Douala',
      password: 'Strong@123',
      referralCode: 'ABCD12',
      terms: true,
    });

    await component.submit();
    await fixture.whenStable();

    expect(authService.register).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/onboarding'], {
      replaceUrl: true,
      queryParams: { redirect: '/raffle-details/test-raffle' },
    });
  });
});
