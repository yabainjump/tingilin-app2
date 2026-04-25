import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import {
  TicketsApiService,
  TicketDto,
} from 'src/app/services/tickets/tickets-api.service';
import {
  RafflesPublicApiService,
  RaffleDetailsDto,
} from 'src/app/services/raffles/raffles-public-api.service';
import { ShareService } from 'src/app/services/share/share.service';

type ViewMode = 'grid' | 'list';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.page.html',
  styleUrls: ['./ticket-details.page.scss'],
  standalone: false,
})
export class TicketDetailsPage {
  loading = true;

  raffleId = '';
  raffle: RaffleDetailsDto | null = null;
  tickets: TicketDto[] = [];

  viewMode: ViewMode = 'grid';

  constructor(
    private route: ActivatedRoute,
    private ticketsApi: TicketsApiService,
    private rafflesApi: RafflesPublicApiService,
    private toast: ToastController,
    private shareService: ShareService,
    private translate: TranslateService,
  ) {}

  ionViewWillEnter() {
    this.raffleId = this.route.snapshot.paramMap.get('raffleId') || '';
    this.load();
  }

  get ticketsOwned(): number {
    return this.tickets.length;
  }

  get totalSpent(): number {
    const unit = Number((this.raffle as any)?.ticketPrice || 0);
    return unit * this.ticketsOwned;
  }

  get drawDateLabel(): string {
    const endsAt = (this.raffle as any)?.endsAt;
    if (!endsAt) return '—';
    return new Date(endsAt).toLocaleDateString();
  }

  get isActive(): boolean {
    const st = String((this.raffle as any)?.status || '').toUpperCase();
    return !['CLOSED', 'DRAWN', 'FINISHED', 'ENDED'].includes(st);
  }

  get raffleShortId(): string {
    return this.raffleId ? `#${this.raffleId.slice(-8).toUpperCase()}` : '—';
  }

  async load() {
    const raffleId =
      this.route.snapshot.paramMap.get('raffleId') ||
      this.route.snapshot.paramMap.get('id') ||
      '';

    if (!raffleId) {
      const t = await this.toast.create({
        message: this.translate.instant('TICKET_DETAILS_PAGE.TOAST_MISSING_ID'),
        duration: 1500,
      });
      await t.present();
      history.back();
      return;
    }

    this.loading = true;
    try {
      const [allTickets, raffle] = await Promise.all([
        firstValueFrom(this.ticketsApi.myTickets()),
        firstValueFrom(this.rafflesApi.getById(this.raffleId)),
      ]);

      this.raffle = raffle;
      this.tickets = allTickets
        .filter((t) => t.raffleId === this.raffleId)
        .sort((a, b) => (a.serial || '').localeCompare(b.serial || ''));
    } catch (e: any) {
      const t = await this.toast.create({
        message:
          e?.error?.message ||
          this.translate.instant('TICKET_DETAILS_PAGE.TOAST_LOAD_FAILED'),
        duration: 1600,
      });
      await t.present();
    } finally {
      this.loading = false;
    }
  }

  async share() {
    const title = this.raffle?.title || 'Tinguilin';
    const text = this.translate.instant('TICKET_DETAILS_PAGE.SHARE_TEXT', {
      title,
      count: this.ticketsOwned,
    });
    const url = this.shareService.raffleShareUrl(this.raffleId);

    try {
      const mode = await this.shareService.share({ title: 'Tingilin', text, url });
      if (mode === 'copied') {
        const t = await this.toast.create({
          message: this.translate.instant('TICKET_DETAILS_PAGE.TOAST_LINK_COPIED'),
          duration: 1200,
        });
        await t.present();
      }
    } catch {
      const t = await this.toast.create({
        message: this.translate.instant('TICKET_DETAILS_PAGE.TOAST_SHARE_UNAVAILABLE'),
        duration: 1200,
      });
      await t.present();
    }
  }

  async copy(serial: string) {
    try {
      await navigator.clipboard.writeText(serial);
      const t = await this.toast.create({
        message: this.translate.instant('TICKET_DETAILS_PAGE.TOAST_TICKET_COPIED'),
        duration: 900,
      });
      await t.present();
    } catch {}
  }

  trackBySerial(_: number, ticket: TicketDto): string {
    return ticket.serial;
  }
}
