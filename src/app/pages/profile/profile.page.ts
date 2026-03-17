import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { finalize, forkJoin, of, catchError } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import {
  HistoryResult,
  ProfileApiService,
  ProfileHistoryItem,
  ProfileStats,
  ProfileUser,
} from 'src/app/services/profile/profile-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage {
  loadingHeader = true;
  loadingStats = true;
  loadingHistory = true;

  user: ProfileUser | null = null;
  stats: ProfileStats | null = null;
  history: ProfileHistoryItem[] = [];

  constructor(
    private api: ProfileApiService,
    private auth: AuthService,
    private nav: NavController,
    private toast: ToastController,
    private router: Router,
  ) {}

  ionViewWillEnter() {
    this.loadAll();
  }

  loadAll() {
    this.loadingHeader = true;
    this.loadingStats = true;
    this.loadingHistory = true;

    forkJoin({
      me: this.api.me().pipe(catchError(() => of(null))),
      stats: this.api.stats().pipe(
        catchError(() =>
          of({
            balance: 0,
            currency: 'XAF',
            ticketsBought: 0,
            productsWon: 0,
          }),
        ),
      ),
      history: this.api.history(5).pipe(catchError(() => of([]))),
    })
      .pipe(
        finalize(() => {
          this.loadingHeader = false;
          this.loadingStats = false;
          this.loadingHistory = false;
        }),
      )
      .subscribe(({ me, stats, history }) => {
        this.user = me;
        this.stats = stats;
        this.history = history;
      });
  }

  get fullName(): string {
    const fn = this.user?.firstName ?? '';
    const ln = this.user?.lastName ?? '';
    const n = `${fn} ${ln}`.trim();
    return n || '—';
  }

  get balanceLabel(): string {
    const b = this.stats?.balance ?? 0;
    const c = this.stats?.currency ?? 'XAF';
    return `${b.toLocaleString('fr-FR')} ${c}`;
  }

  back() {
    this.nav.navigateBack('/tabs/home');
  }

  settings() {
    this.nav.navigateForward('/tabs/edit-profile');
  }

  openSupport() {
    this.nav.navigateForward('/support');
  }

  async logout() {
    this.auth.logout();
    const t = await this.toast.create({
      message: 'Déconnecté ✅',
      duration: 900,
    });
    await t.present();
    this.nav.navigateRoot('/landing');
  }

  goBack() {
    this.nav.back();
  }
  goSettings() {
    /* plus tard */
  }
  editAvatar() {
    /* plus tard */
  }
  topUp() {
    /* plus tard */
  }
  goHistory() {
    /* navigation historique */
  }

  async openHistoryItem(h: ProfileHistoryItem) {
    const raffleId = this.getHistoryRaffleId(h);
    if (!raffleId) {
      const t = await this.toast.create({
        message: "Impossible d'ouvrir ce raffle (id manquant)",
        duration: 1500,
      });
      await t.present();
      return;
    }

    let ok = await this.router.navigate(['/tabs/raffle-details', raffleId]);
    if (!ok) {
      ok = await this.router.navigate(['/raffle-details', raffleId]);
    }

    if (!ok) {
      const t = await this.toast.create({
        message: 'Navigation impossible vers le raffle',
        duration: 1500,
      });
      await t.present();
    }
  }

  trackByTitle(_: number, x: { title: string }) {
    return x.title;
  }

  private parseHistoryResult(h: ProfileHistoryItem): HistoryResult {
    const raw = String(h?.result ?? '')
      .trim()
      .toUpperCase();

    if (raw === 'WON' || raw === 'WIN') return 'WON';
    if (raw === 'LOST' || raw === 'LOSE') return 'LOST';
    return 'NONE';
  }

  isHistoryLost(h: ProfileHistoryItem): boolean {
    return this.parseHistoryResult(h) === 'LOST';
  }

  isRaffleActive(h: ProfileHistoryItem): boolean {
    const st = String(h?.status || '')
      .trim()
      .toUpperCase();

    if (h?.endsAt) {
      const end = new Date(h.endsAt).getTime();
      if (!Number.isNaN(end) && end <= Date.now()) return false;
    }

    if (['CLOSED', 'DRAWN', 'FINISHED', 'ENDED'].includes(st)) return false;
    if (st === 'LIVE') return true;

    const result = this.parseHistoryResult(h);
    if (result !== 'NONE') return false;

    return false;
  }

  historyBadgeTone(h: ProfileHistoryItem): 'live' | 'won' | 'lost' | 'ended' {
    if (this.isRaffleActive(h)) return 'live';

    const result = this.parseHistoryResult(h);
    if (result === 'WON') return 'won';
    if (result === 'LOST') return 'lost';
    return 'ended';
  }

  raffleBadgeLabel(h: ProfileHistoryItem): string {
    const tone = this.historyBadgeTone(h);
    if (tone === 'live') return 'LIVE';
    if (tone === 'won') return 'Gagné';
    if (tone === 'lost') return 'Perdu';
    return 'Terminé';
  }

  getHistoryRaffleId(h: ProfileHistoryItem): string {
    const anyHistory = h as any;
    return anyHistory?.raffleId || anyHistory?._id || anyHistory?.id || '';
  }
}
