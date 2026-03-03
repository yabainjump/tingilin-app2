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

  goToPayment() {
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
          this.startCountdown(r.endsAt ?? null);
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

  private startCountdown(endsAt: string | null) {
    this.tickSub?.unsubscribe();

    const update = () => {
      if (!endsAt) {
        this.remainingLabel = '--:--:--';
        return;
      }
      const end = new Date(endsAt).getTime();
      const ms = Math.max(0, end - Date.now());
      const s = Math.floor(ms / 1000);

      const days = Math.floor(s / 86400);
      const hh = Math.floor((s % 86400) / 3600);
      const mm = Math.floor((s % 3600) / 60);
      const ss = s % 60;

      this.remainingLabel =
        days > 0
          ? `${days}j ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
          : `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
    };

    update();
    this.tickSub = interval(1000).subscribe(update);
  }

  percent(): number {
    const total = this.raffle?.total ?? 0;
    const sold = this.raffle?.sold ?? 0;
    if (!total) return 0;
    return Math.max(0, Math.min(100, (sold / total) * 100));
  }

  left(): number {
    const total = this.raffle?.total ?? 0;
    const sold = this.raffle?.sold ?? 0;
    return Math.max(0, total - sold);
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

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.load(id);
  }

  load(id: string) {
    this.loading = true;
    this.api
      .getById(id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => (this.raffle = data),
        error: () => (this.raffle = null),
      });
  }

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

  participate() {
    // prochaine étape: POST buy tickets
  }
}
