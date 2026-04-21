import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { finalize, firstValueFrom, interval, Subscription } from 'rxjs';
import {
  RafflesPublicApiService,
  RaffleDetailsDto,
} from 'src/app/services/raffles/raffles-public-api.service';
import {
  WinnerDto,
  WinnersApiService,
} from 'src/app/services/winners/winners-api.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ShareService } from 'src/app/services/share/share.service';
import { ReferralApiService } from 'src/app/services/referral/referral-api.service';
import { PaymentsApiService } from 'src/app/core/api/payments-api.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { toAbsoluteMediaUrl } from 'src/app/shared/utils/media-url';
import { NetworkStatusService } from 'src/app/services/offline/network-status.service';

type RecentWinnerCard = {
  name: string;
  note: string;
  avatar: string;
};

@Component({
  selector: 'app-raffle-details',
  templateUrl: './raffle-details.page.html',
  styleUrls: ['./raffle-details.page.scss'],
  standalone: false,
})
export class RaffleDetailsPage implements OnInit {
  loading = true;
  quantity: number = 1;

  raffle: RaffleDetailsDto | null = null;

  qty = 1;
  maxQty = 10;

  tickets = 1;
  remainingLabel = '--:--:--';
  progressPct = 0;
  private nowMs = Date.now();
  private tickSub?: Subscription;

  winners: RecentWinnerCard[] = [];
  freeTicketsBalance = 0;
  usingFreeTicket = false;
  readonly isOffline$ = this.networkStatus.offline$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: RafflesPublicApiService,
    private winnersApi: WinnersApiService,
    private nav: NavController,
    private toast: ToastController,
    private auth: AuthService,
    private alertCtrl: AlertController,
    private shareService: ShareService,
    private referralApi: ReferralApiService,
    private paymentsApi: PaymentsApiService,
    private translate: TranslateService,
    private networkStatus: NetworkStatusService,
  ) {}

  async goToPayment() {
    const raffleId = this.currentRaffleId;
    if (!raffleId) return;

    if (!this.auth.isLoggedIn()) {
      await this.promptAuthBeforePurchase(raffleId);
      return;
    }

    if (!this.canParticipate) {
      const t = await this.toast.create({
        message: this.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_RAFFLE_CLOSED_PURCHASE'),
        duration: 1500,
      });
      await t.present();
      return;
    }

    const r: any = this.raffle; // ✅ bypass typing juste ici

    const unit = Number(r?.ticketPrice ?? r?.ticket_price ?? 0);

    // ✅ MODIF: utiliser la quantité UI (qty), pas "quantity"
    const qty = Math.max(1, Number(this.qty || 1));
    const amount = qty * unit;

    const title =
      r?.product?.title || r?.productTitle || r?.title || r?.name || 'Tombola';

    const imageUrlRaw =
      r?.product?.imageUrl ||
      r?.product?.image ||
      r?.productImage ||
      r?.imageUrl ||
      r?.image ||
      '';
    const imageUrl = toAbsoluteMediaUrl(imageUrlRaw, environment.apiBaseUrl) || '';

    this.router.navigate(['/tabs/payment-confirmation'], {
      queryParams: { raffleId, title, imageUrl, qty, unit, amount },
    });
  }

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.nav.back();
      return;
    }

    this.loadFreeTicketsBalance();
    this.loadRecentWinners();

    this.loading = true;
    this.api
      .getById(id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (r) => {
          this.raffle = r;
          this.startCountdown(this.resolveEndAt(r));
        },
        error: async () => {
          const t = await this.toast.create({
            message: this.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_NOT_FOUND'),
            duration: 1500,
          });
          await t.present();
          this.nav.back();
        },
      });
  }

  private loadFreeTicketsBalance() {
    if (!this.auth.isLoggedIn()) {
      this.freeTicketsBalance = 0;
      return;
    }

    this.referralApi.summary().subscribe({
      next: (s) =>
        (this.freeTicketsBalance = Math.max(
          0,
          Number(s?.freeTicketsBalance ?? 0),
        )),
      error: () => (this.freeTicketsBalance = 0),
    });
  }

  private loadRecentWinners() {
    this.winnersApi.list(8).subscribe({
      next: (res: any) => {
        const list: WinnerDto[] = Array.isArray(res) ? res : (res?.data ?? []);
        this.winners = list.map((w) => this.mapWinnerCard(w));
      },
      error: () => {
        this.winners = [];
      },
    });
  }

  private mapWinnerCard(w: WinnerDto): RecentWinnerCard {
    const prize = String(w?.prizeTitle ?? '').trim();
    const note = prize
      ? this.translate.instant('RAFFLE_DETAILS_PAGE.WINNER_NOTE_WITH_PRIZE', { prize })
      : w?.ticketCode
        ? this.translate.instant('RAFFLE_DETAILS_PAGE.WINNER_NOTE_WITH_TICKET', { ticket: w.ticketCode })
        : this.translate.instant('RAFFLE_DETAILS_PAGE.RECENT_WINNER');

    return {
      name: String(w?.winnerName ?? this.translate.instant('RAFFLE_DETAILS_PAGE.WINNER')),
      note,
      avatar: this.avatarSrc(w?.avatar),
    };
  }

  private avatarSrc(raw?: string | null): string {
    const s = String(raw ?? '').trim();
    if (!s || s === 'null' || s === 'undefined') return 'assets/img/profile.svg';
    if (s.startsWith('http://') || s.startsWith('https://')) return s;
    if (s.startsWith('data:') || s.startsWith('assets/')) return s;
    if (s.startsWith('../assets/')) return s.replace('../', '');
    return `assets/img/${s}`;
  }

  ngOnDestroy(): void {
    this.tickSub?.unsubscribe();
  }

  ionViewWillLeave(): void {
    this.tickSub?.unsubscribe();
  }

  private resolveEndAt(r: RaffleDetailsDto | null): string | null {
    const raw = r?.endsAt ?? r?.endAt ?? null;
    return raw ? String(raw) : null;
  }

  private resolveStartAt(r: RaffleDetailsDto | null): string | null {
    const raw = r?.startAt ?? null;
    return raw ? String(raw) : null;
  }

  private startCountdown(endsAt: string | null) {
    this.tickSub?.unsubscribe();

    const update = () => {
      this.nowMs = Date.now();

      if (!endsAt) {
        this.remainingLabel = '--:--:--';
        this.progressPct = 0;
        return;
      }
      const end = new Date(endsAt).getTime();
      const ms = Math.max(0, end - this.nowMs);
      const s = Math.floor(ms / 1000);

      const days = Math.floor(s / 86400);
      const hh = Math.floor((s % 86400) / 3600);
      const mm = Math.floor((s % 3600) / 60);
      const ss = s % 60;

      this.remainingLabel =
        days > 0
          ? `${days}j ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
          : `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;

      this.progressPct = this.computeProgress(end, this.nowMs);
    };

    update();
    this.tickSub = interval(1000).subscribe(update);
  }

  private computeProgress(end: number, now: number): number {
    if (!Number.isFinite(end)) return 0;
    const startRaw = this.resolveStartAt(this.raffle);
    const start = startRaw ? new Date(startRaw).getTime() : NaN;

    if (Number.isFinite(start) && end > start) {
      const elapsed = Math.max(0, Math.min(end - start, now - start));
      return Math.max(0, Math.min(100, (elapsed / (end - start)) * 100));
    }

    // fallback si startAt absent
    const remaining = Math.max(0, end - now);
    const fallbackWindow = 24 * 60 * 60 * 1000;
    const elapsedFallback = Math.max(0, fallbackWindow - remaining);
    return Math.max(
      0,
      Math.min(100, (elapsedFallback / fallbackWindow) * 100),
    );
  }

  // ✅ MODIF: inc/dec doivent modifier qty (et synchroniser quantity)
  inc() {
    if (this.qty < this.maxQty) {
      this.qty += 1;
      this.quantity = this.qty;
    }
  }

  dec() {
    if (this.qty > 1) {
      this.qty -= 1;
      this.quantity = this.qty;
    }
  }

  get totalPrice(): number {
    const qty = this.qty ?? 0;
    const price = this.ticketPrice ?? 0;
    return qty * price;
  }

  ngOnInit() {}

  back() {
    history.back();
  }

  toggleFav() {}
  async share() {
    const raffleId = this.currentRaffleId;
    if (!raffleId) return;

    const title = this.raffle?.title || this.translate.instant('RAFFLE_DETAILS_PAGE.SHARE_FALLBACK_TITLE');
    const text = this.translate.instant('RAFFLE_DETAILS_PAGE.SHARE_TEXT', { title });
    const url = this.shareService.raffleShareUrl(raffleId);

    try {
      const mode = await this.shareService.share({
        title: 'Tingilin',
        text,
        url,
      });

      if (mode === 'copied') {
        const t = await this.toast.create({
          message: this.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_LINK_COPIED'),
          duration: 1400,
        });
        await t.present();
      }
    } catch {
      const t = await this.toast.create({
        message: this.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_SHARE_UNAVAILABLE'),
        duration: 1400,
      });
      await t.present();
    }
  }

  get sold(): number {
    return this.raffle?.sold ?? 0;
  }

  get total(): number {
    return this.raffle?.total ?? 0;
  }

  get remaining(): number {
    return Math.max(0, this.total - this.sold);
  }

  get ticketPrice(): number {
    return this.raffle?.ticketPrice ?? 0;
  }

  get currency(): string {
    return this.raffle?.currency ?? 'XAF';
  }

  get isRaffleClosed(): boolean {
    const status = String(this.raffle?.status ?? '')
      .trim()
      .toUpperCase();
    if (status === 'CLOSED' || status === 'DRAWN') return true;

    const endRaw = this.resolveEndAt(this.raffle);
    if (!endRaw) return false;

    const end = new Date(endRaw).getTime();
    return Number.isFinite(end) ? end <= this.nowMs : false;
  }

  get canParticipate(): boolean {
    return !!this.raffle && !this.loading && !this.isRaffleClosed;
  }

  get canUseFreeTicket(): boolean {
    return (
      this.auth.isLoggedIn() &&
      this.freeTicketsBalance > 0 &&
      this.canParticipate &&
      !this.usingFreeTicket
    );
  }

  get hasFreeTickets(): boolean {
    return this.auth.isLoggedIn() && this.freeTicketsBalance > 0;
  }

  async useFreeTicket() {
    const raffleId = this.currentRaffleId;
    if (!raffleId) return;

    if (!this.auth.isLoggedIn()) {
      await this.promptAuthBeforePurchase(raffleId);
      return;
    }

    if (this.freeTicketsBalance <= 0) {
      const t = await this.toast.create({
        message: this.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_NO_FREE_TICKET'),
        duration: 1500,
      });
      await t.present();
      return;
    }

    if (!this.canParticipate) {
      const t = await this.toast.create({
        message: this.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_RAFFLE_CLOSED_USE'),
        duration: 1500,
      });
      await t.present();
      return;
    }

    this.usingFreeTicket = true;
    try {
      await firstValueFrom(this.paymentsApi.useFreeTicket(raffleId));
      this.freeTicketsBalance = Math.max(0, this.freeTicketsBalance - 1);

      const t = await this.toast.create({
        message: this.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_FREE_TICKET_USED'),
        duration: 1600,
      });
      await t.present();

      await this.router.navigate(['/tabs/ticket-details', raffleId]);
    } catch (e: any) {
      const t = await this.toast.create({
        message:
          e?.error?.message ||
          e?.message ||
          this.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_FREE_TICKET_FAILED'),
        duration: 1700,
      });
      await t.present();
      this.loadFreeTicketsBalance();
    } finally {
      this.usingFreeTicket = false;
    }
  }

  participate() {
    // prochaine étape: POST buy tickets
  }

  private get currentRaffleId(): string | null {
    const routeId = String(this.route.snapshot.paramMap.get('id') ?? '').trim();
    if (routeId) return routeId;

    const data: any = this.raffle;
    const value = data?._id || data?.id || data?.raffleId;
    const id = String(value ?? '').trim();
    return id || null;
  }

  private async promptAuthBeforePurchase(raffleId: string): Promise<void> {
    const redirect = `/tabs/raffle-details/${encodeURIComponent(raffleId)}`;
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('RAFFLE_DETAILS_PAGE.AUTH_REQUIRED_HEADER'),
      message: this.translate.instant('RAFFLE_DETAILS_PAGE.AUTH_REQUIRED_MESSAGE'),
      buttons: [
        { text: this.translate.instant('RAFFLE_DETAILS_PAGE.CANCEL'), role: 'cancel' },
        {
          text: this.translate.instant('RAFFLE_DETAILS_PAGE.LOGIN'),
          handler: () => {
            void this.router.navigate(['/auth/login'], {
              queryParams: { redirect },
            });
          },
        },
        {
          text: this.translate.instant('RAFFLE_DETAILS_PAGE.CREATE_ACCOUNT'),
          handler: () => {
            void this.router.navigate(['/auth/register'], {
              queryParams: { redirect },
            });
          },
        },
      ],
    });

    await alert.present();
  }

  retryLoad(): void {
    this.ionViewWillEnter();
  }
}
