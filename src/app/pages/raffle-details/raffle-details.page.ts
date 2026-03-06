import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { finalize, interval, Subscription } from 'rxjs';
import {
  RafflesPublicApiService,
  RaffleDetailsDto,
} from 'src/app/services/raffles/raffles-public-api.service';

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

  winners = [
    {
      name: 'Alex M.',
      note: 'Won iPhone 14 Pro',
      avatar: 'https://i.pravatar.cc/100?img=12',
    },
    {
      name: 'Sarah K.',
      note: 'Won Playstation 5',
      avatar: 'https://i.pravatar.cc/100?img=47',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: RafflesPublicApiService,
    private nav: NavController,
    private toast: ToastController,
  ) {}

  async goToPayment() {
    if (!this.canParticipate) {
      const t = await this.toast.create({
        message: 'Ce raffle est clôturé. Achat indisponible.',
        duration: 1500,
      });
      await t.present();
      return;
    }

    const r: any = this.raffle; // ✅ bypass typing juste ici

    const raffleId = r?._id || r?.id || r?.raffleId;
    if (!raffleId) return;

    const unit = Number(r?.ticketPrice ?? r?.ticket_price ?? 0);

    // ✅ MODIF: utiliser la quantité UI (qty), pas "quantity"
    const qty = Math.max(1, Number(this.qty || 1));
    const amount = qty * unit;

    const title =
      r?.product?.title || r?.productTitle || r?.title || r?.name || 'Tombola';

    const imageUrl =
      r?.product?.imageUrl ||
      r?.product?.image ||
      r?.productImage ||
      r?.imageUrl ||
      r?.image ||
      '';

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
            message: 'Raffle introuvable',
            duration: 1500,
          });
          await t.present();
          this.nav.back();
        },
      });
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
  share() {}

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

  participate() {
    // prochaine étape: POST buy tickets
  }
}
