import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { convertToParamMap, ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { AuthStateService } from '../../services/auth/auth-state.service';
import { OnboardingPage } from './onboarding.page';

describe('OnboardingPage', () => {
  let component: OnboardingPage;
  let fixture: ComponentFixture<OnboardingPage>;
  let router: jasmine.SpyObj<Router>;
  let auth: jasmine.SpyObj<AuthService>;
  let authState: jasmine.SpyObj<AuthStateService>;

  beforeEach(async () => {
    router = jasmine.createSpyObj<Router>('Router', [
      'navigateByUrl',
      'navigate',
    ]);
    router.navigateByUrl.and.returnValue(Promise.resolve(true));
    auth = jasmine.createSpyObj<AuthService>('AuthService', ['isLoggedIn']);
    auth.isLoggedIn.and.returnValue(false);
    authState = jasmine.createSpyObj<AuthStateService>('AuthStateService', [
      'updateRegion',
    ]);
    Object.defineProperty(authState, 'me', { get: () => null });
    authState.updateRegion.and.returnValue(of(null));

    await TestBed.configureTestingModule({
      declarations: [OnboardingPage],
      imports: [IonicModule.forRoot(), TranslateModule.forRoot()],
      providers: [
        { provide: Router, useValue: router },
        {
          provide: AuthService,
          useValue: auth,
        },
        {
          provide: AuthStateService,
          useValue: authState,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: convertToParamMap({
                redirect: '/tabs/raffle-details/test-id',
              }),
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OnboardingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should move to next slide and back', () => {
    expect(component.currentIndex).toBe(0);
    component.next();
    expect(component.currentIndex).toBe(1);
    component.back();
    expect(component.currentIndex).toBe(0);
  });

  it('should navigate directly to a valid slide and ignore invalid indexes', () => {
    component.goToSlide(2);
    expect(component.currentIndex).toBe(2);

    component.goToSlide(-1);
    component.goToSlide(component.slides.length + 1);
    expect(component.currentIndex).toBe(2);
  });

  it('should move to the region step after the last slide', () => {
    component.currentIndex = component.slides.length - 1;
    component.next();
    expect(component.currentIndex).toBe(component.regionStepIndex);
    expect(component.isRegionStep).toBeTrue();
  });

  it('should finish and redirect on the region step', () => {
    component.currentIndex = component.regionStepIndex;
    component.next();
    expect(router.navigateByUrl).toHaveBeenCalledWith(
      '/tabs/raffle-details/test-id',
      { replaceUrl: true },
    );
  });

  it('should skip onboarding', () => {
    component.skip();
    expect(router.navigateByUrl).toHaveBeenCalledWith(
      '/tabs/raffle-details/test-id',
      { replaceUrl: true },
    );
  });

  it('requires and persists a region during profile completion', () => {
    auth.isLoggedIn.and.returnValue(true);
    component.regionRequired = true;
    component.currentIndex = component.regionStepIndex;
    component.onRegionChange('LITTORAL');

    component.next();

    expect(authState.updateRegion).toHaveBeenCalledOnceWith('LITTORAL');
    expect(router.navigateByUrl).toHaveBeenCalledWith(
      '/tabs/raffle-details/test-id',
      { replaceUrl: true },
    );
  });

  it('cannot skip mandatory region completion', () => {
    component.regionRequired = true;
    component.skip();

    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });
});
