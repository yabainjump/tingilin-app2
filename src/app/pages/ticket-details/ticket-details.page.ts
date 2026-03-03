import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

import {
  TicketsApiService,
  TicketDto,
} from 'src/app/services/tickets/tickets-api.service';
import {
  RafflesPublicApiService,
  RaffleDetailsDto,
} from 'src/app/services/raffles/raffles-public-api.service';

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

  async load() {
    if (!this.raffleId) return;

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
        message: e?.error?.message || 'Impossible de charger les tickets',
        duration: 1600,
      });
      await t.present();
    } finally {
      this.loading = false;
    }
  }

  async share() {
    const title = this.raffle?.title || 'Tinguilin';
    const text = `Je participe à "${title}" avec ${this.ticketsOwned} tickets sur Tinguilin.`;
    try {
      // Web Share API si dispo
      if ((navigator as any).share) {
        await (navigator as any).share({ title: 'Tinguilin', text });
        return;
      }
      await navigator.clipboard.writeText(text);
      const t = await this.toast.create({
        message: 'Message copié ✅',
        duration: 1200,
      });
      await t.present();
    } catch {
      const t = await this.toast.create({
        message: 'Partage indisponible',
        duration: 1200,
      });
      await t.present();
    }
  }

  async copy(serial: string) {
    try {
      await navigator.clipboard.writeText(serial);
      const t = await this.toast.create({
        message: 'Ticket copié ✅',
        duration: 900,
      });
      await t.present();
    } catch {}
  }
}
