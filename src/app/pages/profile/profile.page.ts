import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { finalize, forkJoin, of, catchError } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import {
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
      stats: this.api
        .stats()
        .pipe(
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
  openHistoryItem(h: any) {
    /* plus tard */
  }
  trackByTitle(_: number, x: { title: string }) {
    return x.title;
  }
}
