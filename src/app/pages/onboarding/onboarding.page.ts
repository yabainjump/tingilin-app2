import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
  ) {}

  ngOnInit(): void {
    const redirect = String(
      this.route.snapshot.queryParamMap.get('redirect') ?? '',
    ).trim();
    this.redirectTo = redirect.startsWith('/') ? redirect : '/tabs/home';
  }

  get isLast(): boolean {
    return this.currentIndex >= this.slides.length - 1;
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

  skip(): void {
    this.finish();
  }

  private finish(): void {
    void this.router.navigateByUrl(this.redirectTo, { replaceUrl: true });
  }
}
