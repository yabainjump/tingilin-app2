import { ComponentFixture, TestBed } from '@angular/core/testing';
import { convertToParamMap, ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OnboardingPage } from './onboarding.page';

describe('OnboardingPage', () => {
  let component: OnboardingPage;
  let fixture: ComponentFixture<OnboardingPage>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    router = jasmine.createSpyObj<Router>('Router', ['navigateByUrl']);
    router.navigateByUrl.and.returnValue(Promise.resolve(true));

    await TestBed.configureTestingModule({
      declarations: [OnboardingPage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: Router, useValue: router },
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

  it('should finish and redirect on last slide', () => {
    component.currentIndex = component.slides.length - 1;
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
});
