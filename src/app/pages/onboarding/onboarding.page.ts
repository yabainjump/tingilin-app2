import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth/auth.service';
import { AuthStateService } from '../../services/auth/auth-state.service';
import { UserRegion } from '../../shared/region-picker/regions';
import { finalize } from 'rxjs';

type IntroSlide = {
  titleKey: string;
  descriptionKey: string;
  imageUrl: string;
};

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: false,
})
export class OnboardingPage implements OnInit {
  currentIndex = 0;
  selectedRegion: UserRegion | null = null;
  regionRequired = false;
  savingRegion = false;
  regionErrorKey = '';
  private redirectTo = '/tabs/home';

  readonly slides: IntroSlide[] = [
    {
      titleKey: 'ONBOARDING_PAGE.SLIDE_1_TITLE',
      descriptionKey: 'ONBOARDING_PAGE.SLIDE_1_DESC',
      imageUrl: 'assets/img/slide1.png',
    },
    {
      titleKey: 'ONBOARDING_PAGE.SLIDE_2_TITLE',
      descriptionKey: 'ONBOARDING_PAGE.SLIDE_2_DESC',
      imageUrl: 'assets/img/slide2.png',
    },
    {
      titleKey: 'ONBOARDING_PAGE.SLIDE_3_TITLE',
      descriptionKey: 'ONBOARDING_PAGE.SLIDE_3_DESC',
      imageUrl: 'assets/img/slide3.png',
    },
  ];

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly translate: TranslateService,
    private readonly auth: AuthService,
    private readonly authState: AuthStateService,
  ) {}

  ngOnInit(): void {
    const redirect = String(
      this.route.snapshot.queryParamMap.get('redirect') ?? '',
    ).trim();
    this.redirectTo =
      redirect.startsWith('/') && !redirect.startsWith('//')
        ? redirect
        : '/tabs/home';

    this.regionRequired =
      this.route.snapshot.queryParamMap.get('requiredRegion') === '1';

    if (this.regionRequired) {
      if (!this.auth.isLoggedIn()) {
        void this.router.navigate(['/auth/login'], {
          replaceUrl: true,
          queryParams: { redirect: this.redirectTo },
        });
        return;
      }
      // Apres Google Sign-In, ne pas imposer les slides: demander uniquement
      // l'information necessaire pour terminer le profil.
      this.currentIndex = this.regionStepIndex;
    }

    // Preselection avec la region du profil (si deja connecte).
    if (this.authState.me?.region) {
      const known = String(this.authState.me.region).trim().toUpperCase();
      if (this.isKnownRegion(known)) {
        this.selectedRegion = known as UserRegion;
      }
    }
  }

  // Etape supplementaire (apres les slides): choix de la region.
  get regionStepIndex(): number {
    return this.slides.length;
  }

  get dots(): unknown[] {
    return new Array(this.regionStepIndex + 1);
  }

  get isRegionStep(): boolean {
    return this.currentIndex === this.regionStepIndex;
  }

  get isLast(): boolean {
    return this.currentIndex >= this.regionStepIndex;
  }

  get currentSlide(): IntroSlide {
    return this.slides[this.currentIndex];
  }

  get currentSlideTitle(): string {
    return this.translate.instant(this.currentSlide.titleKey);
  }

  get currentSlideDescription(): string {
    return this.translate.instant(this.currentSlide.descriptionKey);
  }

  onRegionChange(region: UserRegion): void {
    this.selectedRegion = region;
    this.regionErrorKey = '';
  }

  next(): void {
    if (this.isLast) {
      this.finish();
      return;
    }
    this.currentIndex += 1;
  }

  back(): void {
    if (this.currentIndex <= 0) return;
    this.currentIndex -= 1;
  }

  goToSlide(index: number): void {
    if (index < 0 || index > this.regionStepIndex) return;
    this.currentIndex = index;
  }

  skip(): void {
    if (this.regionRequired) return;
    this.finish();
  }

  private isKnownRegion(value: string): boolean {
    return ['CENTRE', 'LITTORAL', 'OUEST', 'SUD_OUEST'].includes(value);
  }

  private finish(): void {
    const region = this.selectedRegion;
    if (this.regionRequired) {
      if (!region) {
        this.regionErrorKey = 'ONBOARDING_PAGE.REGION_REQUIRED';
        return;
      }
      if (this.savingRegion) return;

      this.savingRegion = true;
      this.regionErrorKey = '';
      this.authState
        .updateRegion(region)
        .pipe(finalize(() => (this.savingRegion = false)))
        .subscribe({
          next: () => this.navigateToRedirect(),
          error: () => {
            this.regionErrorKey = 'ONBOARDING_PAGE.REGION_SAVE_FAILED';
          },
        });
      return;
    }

    if (region && this.auth.isLoggedIn()) {
      this.authState.updateRegion(region).subscribe({ error: () => undefined });
    }
    this.navigateToRedirect();
  }

  private navigateToRedirect(): void {
    void this.router.navigateByUrl(this.redirectTo, { replaceUrl: true });
  }
}
