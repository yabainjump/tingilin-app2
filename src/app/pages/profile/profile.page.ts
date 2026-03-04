import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { finalize, forkJoin, of, catchError } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import {
  ProfileApiService,
  ProfileHistoryItem,
  ProfileStats,
  ProfileUser,
} from 'src/app/services/profile/profile-api.service';
import { firstValueFrom } from 'rxjs';
import {
  TicketsApiService,
  TicketDto,
} from 'src/app/services/tickets/tickets-api.service';
import { RafflesPublicApiService } from 'src/app/services/raffles/raffles-public-api.service';

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
    private ticketsApi: TicketsApiService,
    private rafflesApi: RafflesPublicApiService,
  ) {}

  ionViewWillEnter() {
    this.loadAll();
  }

  //   openMyTicketsForRaffle(raffleId: string) {
  //   if (!raffleId) return;
  //   this.router.navigate(['/tabs/ticket-details', raffleId]);
  // }

  async openMyTicketsForRaffle(raffleId: string) {
    console.log('[profile] open tickets raffleId=', raffleId);

    if (!raffleId) {
      const t = await this.toast.create({
        // message: 'Impossible d’ouvrir: raffleId manquant',
        duration: 1,
      });
      await t.present();
      return;
    }

    const ok = await this.router.navigate(['/tabs/ticket-details', raffleId]);
    console.log('[profile] navigation ok =', ok);

    if (!ok) {
      const t2 = await this.toast.create({
        message: 'Navigation impossible (route ticket-details introuvable)',
        duration: 1600,
      });
      await t2.present();
    }
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

  async openHistoryItem(h: any) {
    const raffleId = this.getHistoryRaffleId(h);
    console.log('[profile] openHistoryItem raffleId=', raffleId, 'raw=', h);

    // réutilise ton handler existant (toast + navigate)
    await this.openMyTicketsForRaffle(raffleId);
  }

  trackByTitle(_: number, x: { title: string }) {
    return x.title;
  }

  
  isRaffleActive(h: any): boolean {
    const st = String(h?.status || '').toUpperCase();

    // si le backend marque clairement terminé
    if (['CLOSED', 'DRAWN', 'FINISHED', 'ENDED'].includes(st)) return false;

    // si date fin passée
    if (h?.endsAt) {
      const end = new Date(h.endsAt).getTime();
      if (!Number.isNaN(end) && end <= Date.now()) return false;
    }

    return true;
  }

  raffleBadgeLabel(h: any): string {
    return this.isRaffleActive(h) ? 'LIVE' : 'Terminé';
  }

  getHistoryRaffleId(h: any): string {
    return h?.raffleId || h?._id || h?.id || '';
  }

  async loadHistory() {
    this.loadingHistory = true;
    try {
      const tickets = await firstValueFrom(this.ticketsApi.myTickets());

      // group tickets by raffleId
      const map = new Map<string, TicketDto[]>();
      for (const t of tickets) {
        if (!map.has(t.raffleId)) map.set(t.raffleId, []);
        map.get(t.raffleId)!.push(t);
      }

      const out: ProfileHistoryItem[] = [];

      for (const [raffleId, list] of map.entries()) {
        // fetch raffle details
        let raffle: any = null;
        try {
          raffle = await firstValueFrom(this.rafflesApi.getById(raffleId));
        } catch {}

        const title = raffle?.title || 'Tombola';
        const imageUrl = raffle?.imageUrl || 'assets/img/placeholder.png';
        const endsAt = raffle?.endsAt || null;
        const status = raffle?.status || null;

        out.push({
          raffleId,
          title,
          imageUrl,
          status: status || undefined,
          endsAt: endsAt || undefined,
          dateLabel: endsAt ? new Date(endsAt).toLocaleDateString() : '—',
          ticketsLabel: `${list.length} ticket(s)`,
          result: 'NONE',
        });
      }

      // tri : plus récent d’abord (optionnel)
      this.history = out;
    } finally {
      this.loadingHistory = false;
    }
  }
}
