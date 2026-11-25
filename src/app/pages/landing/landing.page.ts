import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeApiService } from 'src/app/services/home/home-api.service';
import { DrawCard } from 'src/app/services/home/home.models';

/**
 * Choisit la vraie tombola mise en avant sur la landing: encore ouverte, pas
 * complete, et qui se termine le plus tot (l'API trie deja par date de fin).
 * Aucune tombola jouable => null: le bloc est masque plutot qu'invente.
 */
export function pickFeaturedRaffle(
  rows: DrawCard[] | null | undefined,
  now: number,
): DrawCard | null {
  for (const r of rows ?? []) {
    const end = Date.parse(String(r?.endsAt ?? r?.endAt ?? ''));
    const total = Number(r?.total ?? 0);
    const sold = Number(r?.sold ?? 0);
    if (!r?.id || !Number.isFinite(end) || end <= now) continue;
    if (total > 0 && sold >= total) continue;
    return r;
  }
  return null;
}

/** "2 j 04:05:06" ou "04:05:06". */
export function formatCountdown(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(s / 86_400);
  const pad = (n: number) => String(n).padStart(2, '0');
  const hms = `${pad(Math.floor((s % 86_400) / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
  return days > 0 ? `${days} j ${hms}` : hms;
}

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  /** Prix d'entree annonce (hero + "a partir de 100 FCFA" du marketing). */
  readonly startingPrice = 100;

  /** Tombola reelle affichee dans "Produit du jour" (null = bloc masque). */
  featured: DrawCard | null = null;
  countdown = '';

  private sub?: Subscription;
  private timer?: ReturnType<typeof setInterval>;

  constructor(private home: HomeApiService) {}

  ionViewWillEnter(): void {
    this.sub?.unsubscribe();
    this.sub = this.home.getEndingSoon('all').subscribe({
      next: (rows) => {
        this.featured = pickFeaturedRaffle(rows, Date.now());
        this.startCountdown();
      },
      error: () => this.clear(),
    });
  }

  ionViewDidLeave(): void {
    this.sub?.unsubscribe();
    this.stopCountdown();
  }

  get progress(): number {
    const total = Number(this.featured?.total ?? 0);
    return total > 0 ? Math.min(1, Number(this.featured?.sold ?? 0) / total) : 0;
  }

  /** Met a jour le compte a rebours; masque la tombola une fois terminee. */
  tick(now = Date.now()): void {
    const end = Date.parse(String(this.featured?.endsAt ?? this.featured?.endAt ?? ''));
    if (!this.featured || !Number.isFinite(end) || end <= now) {
      this.clear();
      return;
    }
    this.countdown = formatCountdown(end - now);
  }

  private startCountdown(): void {
    this.stopCountdown();
    this.tick();
    if (this.featured) this.timer = setInterval(() => this.tick(), 1000);
  }

  private stopCountdown(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = undefined;
  }

  private clear(): void {
    this.stopCountdown();
    this.featured = null;
    this.countdown = '';
  }
}
