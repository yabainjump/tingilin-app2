import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

type BadgeTone = 'pink' | 'gold' | 'violet';

type WinnerCard = {
  raffleId?: string;
  winnerName: string;
  avatarUrl?: string;
  winnerTicketCode: string; // ex: A492
  prizeTitle: string;
  prizeImageUrl?: string;
  drawnAt: string; // ISO
  badgeTone?: BadgeTone;
};

@Component({
  selector: 'app-winners',
  templateUrl: './winners.page.html',
  styleUrls: ['./winners.page.scss'],
  standalone: false,
})
export class WinnersPage implements OnInit {
  featured: WinnerCard | null = null;
  recent: WinnerCard[] = [];

  constructor(private toast: ToastController) {}

  ngOnInit() {
    // TODO: remplacer par un fetch backend (quand l’API "recent winners" sera prête)
    this.seedDemo();
  }

  ionViewWillEnter() {
    // Si plus tard tu charges depuis l’API, fais-le ici pour refresh à chaque entrée.
    // this.load();
  }

  private seedDemo() {
    this.featured = {
      winnerName: 'Moussa Diop',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
      winnerTicketCode: 'A492',
      prizeTitle: 'iPhone 15 Pro Max',
      prizeImageUrl:
        'https://images.unsplash.com/photo-1603898037225-75b2f2f50a8a?auto=format&fit=crop&w=1200&q=60',
      drawnAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
      badgeTone: 'gold',
    };

    this.recent = [
      {
        winnerName: 'Sarah L.',
        avatarUrl: 'https://i.pravatar.cc/150?img=47',
        winnerTicketCode: '8821',
        prizeTitle: 'Samsung 4K TV',
        prizeImageUrl:
          'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=60',
        drawnAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        badgeTone: 'pink',
      },
      {
        winnerName: 'Jean P.',
        avatarUrl: 'https://i.pravatar.cc/150?img=13',
        winnerTicketCode: '1102',
        prizeTitle: '50k FCFA Cash',
        prizeImageUrl:
          'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=60',
        drawnAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        badgeTone: 'gold',
      },
      {
        winnerName: 'Alice K.',
        avatarUrl: 'https://i.pravatar.cc/150?img=25',
        winnerTicketCode: '3391',
        prizeTitle: 'Grocery Pack XL',
        prizeImageUrl:
          'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=60',
        drawnAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        badgeTone: 'violet',
      },
    ];
  }

  trackByRecent(index: number, item: WinnerCard) {
    return item.winnerTicketCode || index;
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
      message: 'Vidéo de célébration: bientôt 🎉',
      duration: 1200,
    });
    await t.present();
  }

  async openWinner(w: WinnerCard) {
    const t = await this.toast.create({
      message: `Gagnant: ${w.winnerName} — Ticket #${w.winnerTicketCode}`,
      duration: 1400,
    });
    await t.present();
  }
}
