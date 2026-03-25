import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import {
  NotificationsApiService,
  NotificationDto,
} from 'src/app/services/notifications/notifications-api.service';
import { NotificationsStateService } from 'src/app/services/notifications/notifications-state.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: false,
})
export class NotificationsPage {
  loading = true;
  items: NotificationDto[] = [];

  constructor(
    private api: NotificationsApiService,
    private state: NotificationsStateService,
    private router: Router,
    private toast: ToastController,
    private translate: TranslateService,
  ) {}

  ionViewWillEnter() {
    this.load();
  }

  async load(ev?: any) {
    this.loading = true;
    try {
      const res = await firstValueFrom(this.api.me(1, 30, false));
      this.items = res.data || [];
      await this.state.refresh();
    } catch (e: any) {
      const t = await this.toast.create({
        message:
          e?.error?.message ||
          this.translate.instant('NOTIFICATIONS_PAGE.TOAST_LOAD_FAILED'),
        duration: 1400,
      });
      await t.present();
    } finally {
      this.loading = false;
      ev?.target?.complete?.();
    }
  }

  async markAllRead() {
    await firstValueFrom(this.api.markAllRead());
    await this.state.refresh();
    this.items = this.items.map((n) => ({
      ...n,
      readAt: n.readAt || new Date().toISOString(),
    }));
  }

  async open(n: NotificationDto) {
    if (!n.readAt) {
      await firstValueFrom(this.api.markRead(n._id));
      n.readAt = new Date().toISOString();
      await this.state.refresh();
    }

    const deepLink = n?.data?.deepLink;
    if (deepLink) {
      this.router.navigateByUrl(deepLink);
      return;
    }

    const raffleId = n?.data?.raffleId;
    if (raffleId) {
      this.router.navigate(['/tabs/ticket-details', raffleId]);
    }
  }

  isUnread(n: NotificationDto) {
    return !n.readAt;
  }

  actionLabel(n: NotificationDto): string | null {
    const t = String(n?.type ?? '').toUpperCase();
    if (t === 'PAYMENT_FAILED') return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_RETRY');
    if (t === 'ENDING_SOON') return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_PARTICIPATE');
    if (t === 'DRAW_STARTED') return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_VIEW_LIVE');
    if (t === 'DRAW_RESULT') return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_VIEW_RESULT');
    if (t === 'FREE_TICKET_AVAILABLE') return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_USE');
    return null;
  }
}
