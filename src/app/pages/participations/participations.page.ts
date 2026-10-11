import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import {
  ParticipationsApiService,
  ParticipationOverviewItemDto,
} from 'src/app/services/participations/participations-api.service';
import { RaffleDetailsDto } from 'src/app/services/raffles/raffles-public-api.service';
import { toAbsoluteMediaUrl } from 'src/app/shared/utils/media-url';
import { environment } from 'src/environments/environment';

type FilterKey = 'ongoing' | 'completed';

type ResultBadge = 'WIN' | 'LOSE' | 'NONE';

interface ParticipationItem {
  raffleId: string;
  raffle?: RaffleDetailsDto;
  ticketsCount: number;
  maskedTicketRef: string;
  progressPct: number; // 0-100
  isCompleted: boolean;
  result: ResultBadge; // WIN/LOSE (optionnel)
  lastTicketAt?: string;
  createdTs?: string;
}

const COMPLETED_STATUSES = ['CLOSED', 'DRAWN', 'FINISHED', 'ENDED'];

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
    private participationsApi: ParticipationsApiService,
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
      const res = await firstValueFrom(this.participationsApi.overview());

      const items = (res?.data ?? []).map((item) =>
        this.toParticipationItem(item),
      );

      // tri par ticket le plus recent (lastTicketAt ISO -> localeCompare)
      items.sort((a, b) => {
        const aAt = a.lastTicketAt || '';
        const bAt = b.lastTicketAt || '';
        if (aAt !== bAt) return bAt.localeCompare(aAt);
        return (b.createdTs || '').localeCompare(a.createdTs || '');
      });

      this.items = items;
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

  private toParticipationItem(item: ParticipationOverviewItemDto): ParticipationItem {
    const raffle = (item.raffle ?? null) as RaffleDetailsDto | null;
    const st = String(raffle?.status || '').toUpperCase();
    const total = Number(raffle?.total || 0);
    const sold = Number(raffle?.sold || 0);

    return {
      raffleId: item.raffleId,
      raffle: raffle
        ? {
            ...raffle,
            id: String(raffle.id ?? item.raffleId),
            imageUrl:
              toAbsoluteMediaUrl(raffle.imageUrl, environment.apiBaseUrl) ??
              raffle.imageUrl,
          }
        : undefined,
      ticketsCount: Number(item.ticketsCount || 0),
      maskedTicketRef: this.maskSerial(item.firstSerial ?? ''),
      isCompleted: COMPLETED_STATUSES.includes(st),
      progressPct:
        total > 0 ? Math.max(0, Math.min(100, (sold / total) * 100)) : 0,
      result: 'NONE',
      lastTicketAt: item.lastTicketAt,
      createdTs: item.createdTs,
    };
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
