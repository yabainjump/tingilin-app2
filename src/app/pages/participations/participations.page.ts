import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { firstValueFrom, from } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import {
  TicketsApiService,
  TicketDto,
} from 'src/app/services/tickets/tickets-api.service';
import {
  RafflesPublicApiService,
  RaffleDetailsDto,
} from 'src/app/services/raffles/raffles-public-api.service';

type FilterKey = 'ongoing' | 'completed';

type ResultBadge = 'WIN' | 'LOSE' | 'NONE';

interface ParticipationItem {
  raffleId: string;
  raffle?: RaffleDetailsDto;
  tickets: TicketDto[];
  ticketsCount: number;
  maskedTicketRef: string;
  progressPct: number; // 0-100
  isCompleted: boolean;
  result: ResultBadge; // WIN/LOSE (optionnel)
}

@Component({
  selector: 'app-participations',
  templateUrl: './participations.page.html',
  styleUrls: ['./participations.page.scss'],
  standalone: false,
})
export class ParticipationsPage {
  loading = true;
  filter: FilterKey = 'ongoing';

  items: ParticipationItem[] = [];

  constructor(
    private ticketsApi: TicketsApiService,
    private rafflesApi: RafflesPublicApiService,
    private router: Router,
    private toast: ToastController,
    private translate: TranslateService,
  ) {}

  ionViewWillEnter() {
    this.load();
  }

  get filtered(): ParticipationItem[] {
    const completed = this.filter === 'completed';
    return this.items.filter((i) => i.isCompleted === completed);
  }

  get ongoingCount(): number {
    return this.items.filter((item) => !item.isCompleted).length;
  }

  get completedCount(): number {
    return this.items.filter((item) => item.isCompleted).length;
  }

  get totalTicketsCount(): number {
    return this.items.reduce((sum, item) => sum + item.ticketsCount, 0);
  }

  async load() {
    this.loading = true;
    try {
      const tickets = await firstValueFrom(this.ticketsApi.myTickets());

      // group by raffleId
      const map = new Map<string, TicketDto[]>();
      for (const t of tickets) {
        if (!map.has(t.raffleId)) map.set(t.raffleId, []);
        map.get(t.raffleId)!.push(t);
      }

      const groups: ParticipationItem[] = [];
      for (const [raffleId, list] of map.entries()) {
        list.sort((a, b) =>
          (b.createdAt || '').localeCompare(a.createdAt || ''),
        );
        const firstSerial = list[0]?.serial || '';
        groups.push({
          raffleId,
          tickets: list,
          ticketsCount: list.length,
          maskedTicketRef: this.maskSerial(firstSerial),
          progressPct: 0,
          isCompleted: false,
          result: 'NONE',
        });
      }

      // Fetch raffle details in parallel to keep the dashboard snappy.
      await Promise.all(
        groups.map(async (g) => {
        try {
          const r = await firstValueFrom(this.rafflesApi.getById(g.raffleId));
          g.raffle = r;

          // completed vs ongoing
          const st = String((r as any).status || '').toUpperCase();
          g.isCompleted = ['CLOSED', 'DRAWN', 'FINISHED', 'ENDED'].includes(st);

          // progress: sold/total (fallback safe)
          const total = Number((r as any).total || 0);
          const sold = Number((r as any).sold || 0);
          g.progressPct =
            total > 0 ? Math.max(0, Math.min(100, (sold / total) * 100)) : 0;

          // WIN/LOSE: optionnel (si tu ajoutes winner endpoint plus tard)
          // -> pour le moment: NONE (mais la structure est prête)
        } catch {
          // raffle may be missing: keep minimal
        }
        }),
      );

      // sort by most recent ticket
      groups.sort((a, b) =>
        (b.tickets[0]?.createdAt || '').localeCompare(
          a.tickets[0]?.createdAt || '',
        ),
      );

      this.items = groups;
    } catch (e: any) {
      const t = await this.toast.create({
        message:
          e?.error?.message ||
          this.translate.instant('PARTICIPATIONS_PAGE.TOAST_LOAD_FAILED'),
        duration: 1600,
      });
      await t.present();
    } finally {
      this.loading = false;
    }
  }

  openDetails(item: ParticipationItem) {
    this.router.navigate(['/tabs/ticket-details', item.raffleId]);
  }

  private maskSerial(serial: string) {
    if (!serial) return this.translate.instant('PARTICIPATIONS_PAGE.TICKET_FALLBACK');
    // ex: TGL-63F708-444ABDEB -> TGL-63F7...BDEB
    const clean = String(serial);
    const label = this.translate.instant('PARTICIPATIONS_PAGE.TICKET');
    if (clean.length <= 10) return `${label} #${clean}`;
    return `${label} #${clean.slice(0, 8)}...${clean.slice(-4)}`;
  }

  trackByItem(_: number, item: ParticipationItem): string {
    return item.raffleId;
  }
}
