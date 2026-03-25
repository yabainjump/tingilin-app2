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
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB5XKfqycroT-1SA7aaYtaiE8nPPOjt2bIo98RcNaIGSX0te6Lc0xguluXUmxli_zEHG1QCi3dzFTql3D9DMj-5fVR8UAZaZiX3eWebx0zNLw8U7ZATxU2B8YPmLSr2Iap1r_1-C10-9YRowqD0icQVt--GAEu-woOP890BrJBimqB3uqdciXkWY9l6qcbZqUWH49G5JyFZf-9GgqkFJb9T9PS3c1OSgdLxPhvp-2VZvoU0dy0wX-xsn08L-W5MKwDyUTAvGrflKw8',
    },
    {
      titleKey: 'ONBOARDING_PAGE.SLIDE_2_TITLE',
      descriptionKey: 'ONBOARDING_PAGE.SLIDE_2_DESC',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCHcHEMzme2NW4BEDin74YoVCF7hcwZA_QpJeCYifR5alblS-umNqZPqR3SArjwz-yvJEOuJBj3HPDOUTQb4EeNz-YOvUHNvVaE4WB032YV0GuiPzmMUiCQPm6zFRpagKXFq9qj8ACkpfUyoCCjmwIJ5qU5QunvZqvEX-JnElFUZu6eEHCzK7_626hcI7RNEQdWw7IvMnuSqtG7vaEYRw2b4CPJ0fUPtqEWA2b5deM8-sTk9HnCiXrYuTjUkG-CgRUyNmmEUHufJ74',
    },
    {
      titleKey: 'ONBOARDING_PAGE.SLIDE_3_TITLE',
      descriptionKey: 'ONBOARDING_PAGE.SLIDE_3_DESC',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuArhabyjT3I-EY-DA57CdMsKEGj9WlXDQUxvuEVEy11jDWWoOiju2i4MEGaOlxjbFLaKLtqRRlU7ukN9KufOBQGmppm8VlEFjyhxPwL4fKoghYAn_wPoECN2vts4KJfT_l4lBjSTVhpB6Gm7q4q_xT6jOY4RaXNsVwHANyS969PEszJWLHARc-dsuJMPUO4sbpJC-3nR04qd0udZr971Jf0tj8iaaW3oM9JlXBATlFZ_BkNZEBwzGy9v-5DWo-SvSm294mQAqI_k8k',
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
