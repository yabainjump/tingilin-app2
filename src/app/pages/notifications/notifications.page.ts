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
import { NetworkStatusService } from 'src/app/services/offline/network-status.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: false,
})
export class NotificationsPage {
  loading = true;
  refreshing = false;
  markingAll = false;
  items: NotificationDto[] = [];
  readonly skeletonItems = [1, 2, 3, 4];
  readonly isOffline$ = this.networkStatus.offline$;
  private knownUnreadCount = 0;
  // Notifs lues localement (anti-course: un rechargement qui devance le PATCH
  // mark-read ne doit pas les reafficher "non-lues").
  private locallyReadIds = new Set<string>();

  constructor(
    private api: NotificationsApiService,
    public state: NotificationsStateService,
    private networkStatus: NetworkStatusService,
    private router: Router,
    private toast: ToastController,
    private translate: TranslateService,
  ) {}

  ionViewWillEnter() {
    void this.load(undefined, this.items.length > 0);
  }

  async load(ev?: any, preserveContent = false) {
    if (!preserveContent || this.items.length === 0) {
      this.loading = true;
    } else {
      this.refreshing = true;
    }

    try {
      const res = await firstValueFrom(this.api.me(1, 30, false));
      this.items = res.data || [];

      // Reconciliation anti-course + bornage du Set: garde "lues" les notifs
      // lues localement meme si le backend renvoie encore readAt=null (PATCH pas
      // encore committe), et on RECONSTRUIT locallyReadIds avec uniquement les
      // ids encore "en attente" (presents ET non confirmes lus). Purge auto des
      // confirmes, des absents et des ids d'un autre compte -> Set toujours borne.
      let unread = Math.max(0, Number(res.unreadCount ?? 0));
      if (this.locallyReadIds.size) {
        const pending = new Set<string>();
        for (const item of this.items) {
          if (!this.locallyReadIds.has(item._id)) continue;
          if (item.readAt) continue; // backend confirme lu -> plus besoin
          item.readAt = new Date().toISOString();
          unread = Math.max(0, unread - 1);
          pending.add(item._id); // toujours en attente de confirmation backend
        }
        this.locallyReadIds = pending;
      }
      this.knownUnreadCount = unread;
      this.state.setLocal(this.knownUnreadCount);
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
      this.refreshing = false;
      ev?.target?.complete?.();
    }
  }

  async markAllRead() {
    if (this.markingAll) return;

    const previousItems = this.items.map((n) => ({ ...n }));
    const previousUnreadCount = this.knownUnreadCount;
    const hadUnread = previousItems.some((n) => !n.readAt);
    if (!hadUnread) return;

    this.markingAll = true;
    const readAt = new Date().toISOString();
    this.items = this.items.map((n) => ({
      ...n,
      readAt: n.readAt || readAt,
    }));
    this.knownUnreadCount = 0;
    this.state.markAllReadLocal();

    try {
      await firstValueFrom(this.api.markAllRead());
    } catch (e: any) {
      this.items = previousItems;
      this.knownUnreadCount = previousUnreadCount;
      this.state.setLocal(previousUnreadCount);
      const t = await this.toast.create({
        message:
          e?.error?.message ||
          this.translate.instant('NOTIFICATIONS_PAGE.TOAST_LOAD_FAILED'),
        duration: 1600,
        position: 'top',
      });
      await t.present();
    } finally {
      this.markingAll = false;
    }
  }

  async open(n: NotificationDto) {
    if (!n.readAt) {
      const previousReadAt = n.readAt;
      const previousUnreadCount = this.knownUnreadCount;
      n.readAt = new Date().toISOString(); // maj optimiste (UI instantanee)
      this.locallyReadIds.add(n._id);
      this.knownUnreadCount = Math.max(0, this.knownUnreadCount - 1);
      this.state.markOneReadLocal();
      // On ATTEND la persistance avant de naviguer: sinon un retour rapide sur
      // la page recharge la liste (GET) et peut gagner la course contre le PATCH
      // mark-read encore en vol -> la notif reapparait "non-lue".
      // Borne a 1.2s pour ne jamais bloquer la navigation sur reseau lent
      // (le mark-read continue en arriere-plan / via la file offline).
      let timer: ReturnType<typeof setTimeout> | undefined;
      const timeout = new Promise<void>((resolve) => {
        timer = setTimeout(resolve, 1200);
      });
      try {
        await Promise.race([
          this.persistReadState(n, previousReadAt, previousUnreadCount),
          timeout,
        ]);
      } finally {
        if (timer) clearTimeout(timer); // evite un timer/closure qui traine
      }
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

  get hasUnreadItems(): boolean {
    return this.items.some((item) => !item.readAt);
  }

  trackById(_index: number, item: NotificationDto) {
    return item._id;
  }

  iconName(n: NotificationDto): string {
    const type = String(n?.type ?? '').toUpperCase();
    if (type === 'PAYMENT_SUCCESS') return 'card-outline';
    if (type === 'PAYMENT_FAILED') return 'alert-circle-outline';
    if (type === 'ENDING_SOON') return 'time-outline';
    if (type === 'DRAW_STARTED') return 'play-circle-outline';
    if (type === 'DRAW_RESULT' || type === 'WINNER_ANNOUNCED') {
      return 'trophy-outline';
    }
    if (type === 'FREE_TICKET_AVAILABLE' || type === 'FREE_TICKET_USED') {
      return 'ticket-outline';
    }
    return 'notifications-outline';
  }

  toneClass(n: NotificationDto): string {
    const type = String(n?.type ?? '').toUpperCase();
    if (type === 'PAYMENT_SUCCESS') return 'tone-payment';
    if (type === 'PAYMENT_FAILED') return 'tone-alert';
    if (type === 'ENDING_SOON') return 'tone-warning';
    if (type === 'DRAW_STARTED' || type === 'DRAW_RESULT' || type === 'WINNER_ANNOUNCED') {
      return 'tone-draw';
    }
    if (type === 'FREE_TICKET_AVAILABLE' || type === 'FREE_TICKET_USED') {
      return 'tone-bonus';
    }
    return 'tone-default';
  }

  typeLabel(n: NotificationDto): string {
    const type = String(n?.type ?? '').toUpperCase();
    if (type.startsWith('PAYMENT')) {
      return this.translate.instant('NOTIFICATIONS_PAGE.TYPE_PAYMENT');
    }
    if (type.startsWith('DRAW') || type === 'WINNER_ANNOUNCED') {
      return this.translate.instant('NOTIFICATIONS_PAGE.TYPE_DRAW');
    }
    if (type.startsWith('FREE_TICKET')) {
      return this.translate.instant('NOTIFICATIONS_PAGE.TYPE_BONUS');
    }
    if (type === 'ENDING_SOON') {
      return this.translate.instant('NOTIFICATIONS_PAGE.TYPE_URGENT');
    }
    return this.translate.instant('NOTIFICATIONS_PAGE.TYPE_DEFAULT');
  }

  actionLabel(n: NotificationDto): string | null {
    const t = String(n?.type ?? '').toUpperCase();
    if (t === 'PAYMENT_FAILED')
      return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_RETRY');
    if (t === 'ENDING_SOON')
      return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_PARTICIPATE');
    if (t === 'DRAW_STARTED')
      return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_VIEW_LIVE');
    if (t === 'DRAW_RESULT')
      return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_VIEW_RESULT');
    if (t === 'FREE_TICKET_AVAILABLE')
      return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_USE');
    return null;
  }

  private async persistReadState(
    notification: NotificationDto,
    previousReadAt: string | null,
    previousUnreadCount: number,
  ) {
    try {
      await firstValueFrom(this.api.markRead(notification._id));
    } catch {
      // Echec du mark-read: on annule l'optimisme ET on retire l'id de la
      // reconciliation, sinon un rechargement le re-marquerait "lu" a tort
      // alors que le backend le considere toujours non-lu.
      this.locallyReadIds.delete(notification._id);
      notification.readAt = previousReadAt;
      if (!previousReadAt) {
        this.knownUnreadCount = previousUnreadCount;
        this.state.setLocal(previousUnreadCount);
      }
    }
  }
}
