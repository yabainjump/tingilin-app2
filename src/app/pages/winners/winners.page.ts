import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { finalize } from 'rxjs';
import {
  WinnersApiService,
  WinnerDto,
} from 'src/app/services/winners/winners-api.service';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.page.html',
  styleUrls: ['./winners.page.scss'],
  standalone: false,
})
export class WinnersPage implements OnInit {
  loading = true;

  featured: WinnerDto | null = null;
  recent: WinnerDto[] = [];

  constructor(
    private api: WinnersApiService,
    private toast: ToastController,
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.load();
  }

  load() {
    this.loading = true;
    this.api
      .list(20)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res: any) => {
          const list = Array.isArray(res) ? res : (res?.data ?? []);
          this.featured = list.length ? list[0] : null;
          this.recent = list.slice(1);
        },
        error: async () => {
          const t = await this.toast.create({
            message: 'Impossible de charger les gagnants',
            duration: 1400,
          });
          await t.present();
          this.featured = null;
          this.recent = [];
        },
      });
  }

  trackByRecent(index: number, item: WinnerDto) {
    return item.raffleId || item.ticketCode || index;
  }

  avatarUrl(a?: string): string {
    if (!a) return 'assets/img/placeholder.png';
    if (a === 'defpic.jpg') return 'assets/img/defpic.jpg';
    if (a.startsWith('http') || a.startsWith('assets/')) return a;
    return a;
  }

  timeAgo(iso: string): string {
    const d = new Date(iso).getTime();
    const diff = Math.max(0, Date.now() - d);

    const min = Math.floor(diff / 60000);
    if (min < 1) return 'Just now';
    if (min < 60) return `Drawn ${min} mins ago`;

    const h = Math.floor(min / 60);
    if (h < 24) return `${h}h ago`;

    const days = Math.floor(h / 24);
    if (days === 1) return 'Yesterday';
    return `${days}d ago`;
  }

  async openFilters() {
    const t = await this.toast.create({
      message: 'Filtres: bientôt 🙂',
      duration: 1200,
    });
    await t.present();
  }

  async watchCelebration() {
    const t = await this.toast.create({
      message: 'Célébration: bientôt 🎉',
      duration: 1200,
    });
    await t.present();
  }

  async openWinner(w: WinnerDto) {
    const t = await this.toast.create({
      message: `Gagnant: ${w.winnerName} — #${w.ticketCode}`,
      duration: 1400,
    });
    await t.present();
  }

  avatarSrc(a?: string | null): string {
    const s = String(a ?? '').trim();

    if (!s || s === 'null' || s === 'undefined') {
      return '../../../assets/img/profile.svg';
    }

    if (s.startsWith('http://') || s.startsWith('https://')) {
      return s;
    }

    if (s.startsWith('data:')) {
      return s;
    }

    if (s.startsWith('assets/')) {
      return s;
    }

    if (s.startsWith('../assets/')) {
      return s.replace('../', '');
    }
    if (s.startsWith('../asset/')) {
      return s.replace('../asset/', 'assets/');
    }

    return `assets/img/${s}`;
  }
}
