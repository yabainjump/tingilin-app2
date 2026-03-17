import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

type SupportCategoryId =
  | 'all'
  | 'account'
  | 'payments'
  | 'referral'
  | 'winnings';

type SupportCategory = {
  id: SupportCategoryId;
  label: string;
  icon: string;
  tone: 'violet' | 'blue' | 'green' | 'gold';
};

type FaqItem = {
  id: string;
  category: Exclude<SupportCategoryId, 'all'>;
  question: string;
  answer: string;
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
    { id: 'all', label: 'Tout', icon: 'dashboard', tone: 'violet' },
    { id: 'account', label: 'Compte', icon: 'person', tone: 'blue' },
    { id: 'payments', label: 'Paiements', icon: 'payments', tone: 'green' },
    { id: 'referral', label: 'Parrainage', icon: 'group', tone: 'violet' },
    { id: 'winnings', label: 'Gains', icon: 'emoji_events', tone: 'gold' },
  ];

  readonly faqs: FaqItem[] = [
    {
      id: 'claim-prize',
      category: 'winnings',
      question: 'Comment puis-je reclamer mon prix ?',
      answer:
        'Les gains compatibles sont ajoutes automatiquement a votre portefeuille. Pour un lot physique ou un gain necessitant verification, notre equipe vous recontacte apres validation du tirage.',
    },
    {
      id: 'draw-time',
      category: 'winnings',
      question: 'Quand ont lieu les tirages ?',
      answer:
        'Chaque raffle suit sa propre date de cloture. Vous pouvez verifier le compte a rebours sur la fiche du raffle et recevoir une notification quand le tirage demarre.',
    },
    {
      id: 'ticket-limit',
      category: 'payments',
      question: 'Y a-t-il une limite de tickets ?',
      answer:
        'Le nombre de tickets disponibles depend de chaque raffle. Quand une limite par utilisateur existe, elle est indiquee directement sur la fiche avant achat.',
    },
    {
      id: 'payment-pending',
      category: 'payments',
      question: 'Que faire si mon paiement reste en attente ?',
      answer:
        'Patientez quelques instants puis ouvrez a nouveau la fiche du raffle. Si le paiement n est toujours pas confirme, utilisez le bouton de contact pour nous ecrire avec la reference de transaction.',
    },
    {
      id: 'referral-reward',
      category: 'referral',
      question: 'Comment fonctionnent les recompenses de parrainage ?',
      answer:
        'Les bonus sont credites quand votre filleul remplit les conditions d activation definies par la plateforme. Vous pouvez suivre votre progression dans l espace Parrainage.',
    },
    {
      id: 'account-update',
      category: 'account',
      question: 'Comment modifier mes informations de profil ?',
      answer:
        'Ouvrez votre profil puis la page de modification. Vous pouvez y mettre a jour votre avatar et vos informations personnelles autorisees.',
    },
  ];

  searchTerm = '';
  selectedCategoryId: SupportCategoryId = 'all';
  expandedFaqId: string | null = 'claim-prize';

  constructor(
    private nav: NavController,
    private toastController: ToastController,
  ) {}

  get visibleFaqs(): FaqItem[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.faqs.filter((item) => {
      const matchesCategory =
        this.selectedCategoryId === 'all' ||
        item.category === this.selectedCategoryId;

      const matchesSearch =
        !term ||
        item.question.toLowerCase().includes(term) ||
        item.answer.toLowerCase().includes(term);

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
        message:
          'Ajoute environment.supportEmail avant de publier la page support.',
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
        ? `Support Tingilin - ${category.label}`
        : 'Support Tingilin';

    const body = [
      'Bonjour equipe Tingilin,',
      '',
      'J ai besoin d aide concernant :',
      category && category.id !== 'all' ? category.label : 'Support general',
      '',
      'Decrivez votre demande :',
      '',
      '',
      '--',
      'Envoye depuis l application Tingilin',
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
    return this.categories.find((item) => item.id === categoryId)?.label ?? '';
  }

  trackByCategory(_: number, item: SupportCategory): string {
    return item.id;
  }

  trackByFaq(_: number, item: FaqItem): string {
    return item.id;
  }
}
