import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {
  ReferralApiService,
  ReferralListDto,
  ReferralPersonDto,
  ReferralSummaryDto,
} from 'src/app/services/referral/referral-api.service';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share/share.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.page.html',
  styleUrls: ['./referral.page.scss'],
  standalone: false,
})
export class ReferralPage {
  loading = true;
  loadingMoreReferrals = false;
  summary: ReferralSummaryDto | null = null;
  referrals: ReferralPersonDto[] = [];
  referralsPage = 1;
  referralsTotal = 0;
  referralsTotalPages = 1;
  readonly referralsPageSize = 10;

  heroImage = 'assets/img/referal.jpg';

  constructor(
    private readonly api: ReferralApiService,
    private readonly toast: ToastController,
    private readonly nav: NavController,
    private readonly router: Router,
    private readonly shareService: ShareService,
    private readonly translate: TranslateService,
  ) {}

  ionViewWillEnter() {
    this.load();
  }

  load() {
    this.loading = true;
    this.referrals = [];
    this.referralsPage = 1;
    this.referralsTotal = 0;
    this.referralsTotalPages = 1;

    forkJoin({
      summary: this.api.summary(),
      referrals: this.api.referrals(1, this.referralsPageSize),
    })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: ({ summary, referrals }) => {
          this.summary = summary;
          this.applyReferralPage(referrals);
        },
        error: async () => {
          this.summary = null;
          this.referrals = [];
          await this.showToast(
            this.translate.instant('REFERRAL_PAGE.TOAST_LOAD_FAILED'),
          );
        },
      });
  }

  get hasMoreReferrals(): boolean {
    return this.referralsPage < this.referralsTotalPages;
  }

  back() {
    this.nav.back();
  }

  openTickets() {
    this.router.navigateByUrl('/tabs/participations');
  }

  get referralPercent(): number {
    const cur = Number(this.summary?.referral?.progress ?? 0);
    const max = Number(this.summary?.referral?.target ?? 10);
    if (!max) return 0;
    return Math.max(0, Math.min(100, (cur / max) * 100));
  }

  get loyaltyPercent(): number {
    const cur = Number(this.summary?.loyalty?.progress ?? 0);
    const max = Number(this.summary?.loyalty?.target ?? 10);
    if (!max) return 0;
    return Math.max(0, Math.min(100, (cur / max) * 100));
  }

  get referralProgressLabel(): string {
    const cur = Number(this.summary?.referral?.progress ?? 0);
    const max = Number(this.summary?.referral?.target ?? 10);
    return this.translate.instant('REFERRAL_PAGE.REFERRAL_PROGRESS', {
      current: cur,
      target: max,
    });
  }

  get loyaltyProgressLabel(): string {
    const cur = Number(this.summary?.loyalty?.progress ?? 0);
    const max = Number(this.summary?.loyalty?.target ?? 10);
    return this.translate.instant('REFERRAL_PAGE.LOYALTY_PROGRESS', {
      current: cur,
      target: max,
    });
  }

  get rewardHistory() {
    return this.summary?.rewardHistory ?? [];
  }

  trackByReferral(_index: number, referral: ReferralPersonDto): string {
    return referral.userId;
  }

  fullName(u: ReferralPersonDto): string {
    return (
      `${u.firstName ?? ''} ${u.lastName ?? ''}`.trim() ||
      this.translate.instant('REFERRAL_PAGE.USER_FALLBACK')
    );
  }

  avatar(u: ReferralPersonDto): string {
    const s = String(u.avatar ?? '').trim();
    if (!s || s === 'null' || s === 'undefined') {
      return 'assets/img/profile.svg';
    }
    return s;
  }

  historyIcon(source: string): string {
    return source === 'REFERRAL' ? 'person-add-outline' : 'ticket-outline';
  }

  historyTone(source: string): 'ref' | 'loy' {
    return source === 'REFERRAL' ? 'ref' : 'loy';
  }

  historyDate(iso: string | null): string {
    if (!iso) return '-';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '-';
    const locale = this.translate.currentLang === 'en' ? 'en-US' : 'fr-FR';
    return new Intl.DateTimeFormat(locale, {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    }).format(d);
  }

  loadMoreReferrals() {
    if (this.loading || this.loadingMoreReferrals || !this.hasMoreReferrals) {
      return;
    }

    const nextPage = this.referralsPage + 1;
    this.loadingMoreReferrals = true;

    this.api
      .referrals(nextPage, this.referralsPageSize)
      .pipe(finalize(() => (this.loadingMoreReferrals = false)))
      .subscribe({
        next: (response) => {
          this.applyReferralPage(response, true);
        },
        error: async () => {
          await this.showToast(
            this.translate.instant('REFERRAL_PAGE.TOAST_LOAD_MORE_FAILED'),
          );
        },
      });
  }

  private shareText(): string {
    const code = this.summary?.referralCode ?? '';
    return this.translate.instant('REFERRAL_PAGE.SHARE_TEXT', { code });
  }

  private shareLink(): string {
    const code = String(this.summary?.referralCode ?? '').trim();
    if (!code) return '';
    return this.shareService.referralShareUrl(code);
  }

  async copyCode() {
    const code = this.summary?.referralCode ?? '';
    if (!code) return;
    await this.copyToClipboard(code);
    await this.showToast(
      this.translate.instant('REFERRAL_PAGE.TOAST_CODE_COPIED'),
    );
  }

  async copyLink() {
    const link = this.shareLink();
    if (!link) return;
    await this.copyToClipboard(link);
    await this.showToast(
      this.translate.instant('REFERRAL_PAGE.TOAST_LINK_COPIED'),
    );
  }

  async share(channel: 'whatsapp' | 'facebook' | 'sms' | 'other') {
    const text = `${this.shareText()} ${this.shareLink()}`.trim();
    const link = this.shareLink();

    if (!text) return;

    if (channel === 'other') {
      try {
        const mode = await this.shareService.share({
          title: this.translate.instant('REFERRAL_PAGE.SHARE_TITLE'),
          text: this.shareText(),
          url: link,
        });
        if (mode === 'copied') {
          await this.showToast(
            this.translate.instant('REFERRAL_PAGE.TOAST_LINK_COPIED'),
          );
        }
        return;
      } catch {
        await this.showToast(
          this.translate.instant('REFERRAL_PAGE.TOAST_SHARE_UNAVAILABLE'),
        );
        return;
      }
    }

    let url = '';
    if (channel === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    } else if (channel === 'facebook') {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
    } else if (channel === 'sms') {
      url = `sms:?&body=${encodeURIComponent(text)}`;
    }

    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }

    await this.copyLink();
  }

  private async copyToClipboard(value: string) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const ta = document.createElement('textarea');
    ta.value = value;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }

  private async showToast(message: string) {
    const t = await this.toast.create({
      message,
      duration: 1500,
      position: 'top',
    });
    await t.present();
  }

  private applyReferralPage(response: ReferralListDto, append = false) {
    const incoming = Array.isArray(response?.data) ? response.data : [];
    this.referrals = append ? [...this.referrals, ...incoming] : incoming;
    this.referralsPage = Math.max(1, Number(response?.page ?? 1) || 1);
    this.referralsTotal = Math.max(0, Number(response?.total ?? 0) || 0);
    this.referralsTotalPages = Math.max(
      1,
      Number(response?.totalPages ?? 1) || 1,
    );
  }
}
