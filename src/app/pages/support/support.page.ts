import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

type SupportCategoryId =
  'all' | 'account' | 'payments' | 'referral' | 'winnings';

type SupportCategory = {
  id: SupportCategoryId;
  labelKey: string;
  icon: string;
  tone: 'violet' | 'blue' | 'green' | 'gold';
};

type FaqItem = {
  id: string;
  category: Exclude<SupportCategoryId, 'all'>;
  questionKey: string;
  answerKey: string;
};

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
  standalone: false,
})
export class SupportPage {
  readonly supportEmail = String(environment.supportEmail ?? '').trim();

  readonly categories: SupportCategory[] = [
    {
      id: 'all',
      labelKey: 'SUPPORT_PAGE.CATEGORY_ALL',
      icon: 'grid-outline',
      tone: 'violet',
    },
    {
      id: 'account',
      labelKey: 'SUPPORT_PAGE.CATEGORY_ACCOUNT',
      icon: 'person-outline',
      tone: 'blue',
    },
    {
      id: 'payments',
      labelKey: 'SUPPORT_PAGE.CATEGORY_PAYMENTS',
      icon: 'card-outline',
      tone: 'green',
    },
    {
      id: 'referral',
      labelKey: 'SUPPORT_PAGE.CATEGORY_REFERRAL',
      icon: 'people-outline',
      tone: 'violet',
    },
    {
      id: 'winnings',
      labelKey: 'SUPPORT_PAGE.CATEGORY_WINNINGS',
      icon: 'trophy-outline',
      tone: 'gold',
    },
  ];

  readonly faqs: FaqItem[] = [
    {
      id: 'claim-prize',
      category: 'winnings',
      questionKey: 'SUPPORT_PAGE.FAQ_CLAIM_PRIZE_Q',
      answerKey: 'SUPPORT_PAGE.FAQ_CLAIM_PRIZE_A',
    },
    {
      id: 'draw-time',
      category: 'winnings',
      questionKey: 'SUPPORT_PAGE.FAQ_DRAW_TIME_Q',
      answerKey: 'SUPPORT_PAGE.FAQ_DRAW_TIME_A',
    },
    {
      id: 'ticket-limit',
      category: 'payments',
      questionKey: 'SUPPORT_PAGE.FAQ_TICKET_LIMIT_Q',
      answerKey: 'SUPPORT_PAGE.FAQ_TICKET_LIMIT_A',
    },
    {
      id: 'payment-pending',
      category: 'payments',
      questionKey: 'SUPPORT_PAGE.FAQ_PAYMENT_PENDING_Q',
      answerKey: 'SUPPORT_PAGE.FAQ_PAYMENT_PENDING_A',
    },
    {
      id: 'referral-reward',
      category: 'referral',
      questionKey: 'SUPPORT_PAGE.FAQ_REFERRAL_REWARD_Q',
      answerKey: 'SUPPORT_PAGE.FAQ_REFERRAL_REWARD_A',
    },
    {
      id: 'account-update',
      category: 'account',
      questionKey: 'SUPPORT_PAGE.FAQ_ACCOUNT_UPDATE_Q',
      answerKey: 'SUPPORT_PAGE.FAQ_ACCOUNT_UPDATE_A',
    },
  ];

  searchTerm = '';
  selectedCategoryId: SupportCategoryId = 'all';
  expandedFaqId: string | null = 'claim-prize';

  constructor(
    private nav: NavController,
    private toastController: ToastController,
    private translate: TranslateService,
  ) {}

  get visibleFaqs(): FaqItem[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.faqs.filter((item) => {
      const matchesCategory =
        this.selectedCategoryId === 'all' ||
        item.category === this.selectedCategoryId;

      const matchesSearch =
        !term ||
        this.faqQuestion(item).toLowerCase().includes(term) ||
        this.faqAnswer(item).toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }

  goBack(): void {
    if (window.history.length > 1) {
      this.nav.back();
      return;
    }

    this.nav.navigateRoot('/tabs/profile');
  }

  selectCategory(categoryId: SupportCategoryId): void {
    this.selectedCategoryId = categoryId;
  }

  toggleFaq(faqId: string): void {
    this.expandedFaqId = this.expandedFaqId === faqId ? null : faqId;
  }

  isExpanded(faqId: string): boolean {
    return this.expandedFaqId === faqId;
  }

  async contactSupport(categoryId?: SupportCategoryId): Promise<void> {
    if (!this.supportEmail) {
      const toast = await this.toastController.create({
        message: this.translate.instant(
          'SUPPORT_PAGE.TOAST_MISSING_SUPPORT_EMAIL',
        ),
        duration: 1800,
        color: 'warning',
      });
      await toast.present();
      return;
    }

    const category =
      categoryId && categoryId !== 'all'
        ? this.categories.find((item) => item.id === categoryId)
        : this.categories.find((item) => item.id === this.selectedCategoryId);

    const subject =
      category && category.id !== 'all'
        ? this.translate.instant('SUPPORT_PAGE.MAIL_SUBJECT_WITH_CATEGORY', {
            category: this.categoryLabel(category.id),
          })
        : this.translate.instant('SUPPORT_PAGE.MAIL_SUBJECT');

    const body = [
      this.translate.instant('SUPPORT_PAGE.MAIL_BODY_HELLO'),
      '',
      this.translate.instant('SUPPORT_PAGE.MAIL_BODY_NEED_HELP'),
      category && category.id !== 'all'
        ? this.categoryLabel(category.id)
        : this.translate.instant('SUPPORT_PAGE.MAIL_BODY_GENERAL_SUPPORT'),
      '',
      this.translate.instant('SUPPORT_PAGE.MAIL_BODY_DESCRIBE'),
      '',
      '',
      '--',
      this.translate.instant('SUPPORT_PAGE.MAIL_BODY_SENT_FROM_APP'),
    ].join('\n');

    window.location.href = `mailto:${encodeURIComponent(
      this.supportEmail,
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedCategoryId = 'all';
  }

  scrollToFaqs(): void {
    document
      .getElementById('support-faq')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  labelForCategory(categoryId: SupportCategoryId): string {
    return this.categoryLabel(categoryId);
  }

  categoryLabel(categoryId: SupportCategoryId): string {
    const key =
      this.categories.find((item) => item.id === categoryId)?.labelKey ??
      'SUPPORT_PAGE.CATEGORY_ALL';
    return this.translate.instant(key);
  }

  faqQuestion(item: FaqItem): string {
    return this.translate.instant(item.questionKey);
  }

  faqAnswer(item: FaqItem): string {
    return this.translate.instant(item.answerKey);
  }

  trackByCategory(_: number, item: SupportCategory): string {
    return item.id;
  }

  trackByFaq(_: number, item: FaqItem): string {
    return item.id;
  }
}
