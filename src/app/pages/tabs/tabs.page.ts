import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStateService } from 'src/app/services/auth/auth-state.service';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificationsStateService } from 'src/app/services/notifications/notifications-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  isAdmin$: Observable<boolean>;
  isAdmin = false;

  constructor(
    private authState: AuthStateService,
    private nav: NavController,
    public notifState: NotificationsStateService,
    private auth: AuthService,
    private router: Router,
  ) {
    this.isAdmin$ = this.authState.isAdmin$;
  }

  ionViewWillEnter() {
    this.auth.me<{ role: string }>().subscribe({
      next: (u) => (this.isAdmin = u.role === 'ADMIN'),
      error: () => (this.isAdmin = false),
    });
    this.notifState.refresh();
  }

  get showFab(): boolean {
    return this.isAdmin && !this.router.url.includes('create-raffle');
  }

  goCreateRaffle(): void {
    this.nav.navigateForward('/tabs/admin/create-raffle');
  }
}
