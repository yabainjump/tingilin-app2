import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import {
  ReferralApiService,
  ReferralPersonDto,
  ReferralSummaryDto,
} from 'src/app/services/referral/referral-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.page.html',
  styleUrls: ['./referral.page.scss'],
  standalone: false,
})
export class ReferralPage {
  loading = true;
  summary: ReferralSummaryDto | null = null;

  heroImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDOOg0d4HpNXZmAWvwCVeHcpN03z1FYfF5YMX4kTt0oriSjPM-XCUxSUekOMj8sSUxRybLRjP9enk9LyS96OonWN674jR9aZp80CokmEv_S5415x1BTk2JFb3eic6q0s7r5LwZO1mlyo9kD4rlHPdWIVwX4CJTcD6bI4MPiuL92mTSezyBcUWeFExZB-laT6qpFIWNSlrN2E90dbwJkvWg_LSGCrs8Kpyo7JBIst3mmYcldx89e9hi7dbkxrlarzLMUBekMKGE4SwI';

  constructor(
    private readonly api: ReferralApiService,
    private readonly toast: ToastController,
    private readonly nav: NavController,
    private readonly router: Router,
  ) {}

  ionViewWillEnter() {
    this.load();
  }

  load() {
    this.loading = true;
    this.api
      .summary()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res) => {
          this.summary = res;
        },
        error: async () => {
          this.summary = null;
          await this.showToast('Impossible de charger les données de parrainage');
        },
      });
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
    return `${cur}/${max} amis actifs`;
  }

  get loyaltyProgressLabel(): string {
    const cur = Number(this.summary?.loyalty?.progress ?? 0);
    const max = Number(this.summary?.loyalty?.target ?? 10);
    return `${cur}/${max} raffles joués`;
  }

  get rewardHistory() {
    return this.summary?.rewardHistory ?? [];
  }

  fullName(u: ReferralPersonDto): string {
    return `${u.firstName ?? ''} ${u.lastName ?? ''}`.trim() || 'Utilisateur';
  }

  avatar(u: ReferralPersonDto): string {
    const s = String(u.avatar ?? '').trim();
    if (!s || s === 'null' || s === 'undefined') {
      return 'assets/img/profile.svg';
    }
    return s;
  }

  historyIcon(source: string): string {
    return source === 'REFERRAL' ? 'group_add' : 'confirmation_number';
  }

  historyTone(source: string): 'ref' | 'loy' {
    return source === 'REFERRAL' ? 'ref' : 'loy';
  }

  historyDate(iso: string | null): string {
    if (!iso) return '-';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '-';
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    }).format(d);
  }

  private shareText(): string {
    const code = this.summary?.referralCode ?? '';
    return `Rejoins Tingilin avec mon code ${code}. Inscris-toi et tente ta chance !`;
  }

  private shareLink(): string {
    return this.summary?.referralLink ?? '';
  }

  async copyCode() {
    const code = this.summary?.referralCode ?? '';
    if (!code) return;
    await this.copyToClipboard(code);
    await this.showToast('Code parrainage copié');
  }

  async copyLink() {
    const link = this.shareLink();
    if (!link) return;
    await this.copyToClipboard(link);
    await this.showToast('Lien de parrainage copié');
  }

  async share(channel: 'whatsapp' | 'facebook' | 'sms' | 'other') {
    const text = `${this.shareText()} ${this.shareLink()}`.trim();
    const link = this.shareLink();

    if (!text) return;

    if (channel === 'other' && navigator.share) {
      try {
        await navigator.share({
          title: 'Parrainage Tingilin',
          text: this.shareText(),
          url: link,
        });
        return;
      } catch {
        // user canceled or share not available
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
      window.open(url, '_blank');
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
}
