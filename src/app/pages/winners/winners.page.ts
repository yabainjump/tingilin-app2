import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Subscription, finalize, interval } from 'rxjs';
import {
  FairnessDto,
  WinnersApiService,
  WinnerDto,
} from 'src/app/services/winners/winners-api.service';
import { ShareService } from 'src/app/services/share/share.service';
import {
  LiveDrawState,
  WinnersLiveSocketService,
} from 'src/app/services/winners/winners-live-socket.service';
import { TranslateService } from '@ngx-translate/core';
import { HomeApiService } from 'src/app/services/home/home-api.service';
import { DrawCard } from 'src/app/services/home/home.models';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.page.html',
  styleUrls: ['./winners.page.scss'],
  standalone: false,
})
export class WinnersPage implements OnInit, OnDestroy {
  loading = true;

  // Tirages actifs (non terminés)
  allDraws: DrawCard[] = [];
  selectedRaffle: DrawCard | null = null;

  // Données pour la vue détail (scanner / proof)
  recent: WinnerDto[] = [];
  scanTickets: string[] = [];
  activeScanIndex = 0;
  analysisProgress = 0;
  analysisLabel = '';
  isScanning = true;
  liveViewers = 0;
  provablyFair = true;
  hasRealtime = false;

  proof: FairnessDto | null = null;
  proofOpen = false;
  proofLoading = false;

  private scanSub?: Subscription;
  private progressSub?: Subscription;
  private liveSub?: Subscription;

  constructor(
    private api: WinnersApiService,
    private homeApi: HomeApiService,
    private toast: ToastController,
    private nav: NavController,
    private shareService: ShareService,
    private liveSocket: WinnersLiveSocketService,
    private translate: TranslateService,
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.connectRealtime();
    this.load();
  }

  ionViewWillLeave() {
    this.cleanup();
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  private cleanup(): void {
    this.stopScanAnimation();
    this.liveSub?.unsubscribe();
    this.liveSub = undefined;
    this.liveSocket.disconnect();
    this.hasRealtime = false;
  }

  load() {
    this.loading = true;
    this.homeApi
      .getLiveRows('all')
      .pipe(
        finalize(() => {
          this.loading = false;
          if (!this.hasRealtime) {
            this.startScanAnimation();
          }
        }),
      )
      .subscribe({
        next: (cards: DrawCard[]) => {
          // Garder uniquement les raffles non terminées
          const now = Date.now();
          const active = cards.filter((c) => {
            const endMs = c.endsAt ? new Date(c.endsAt).getTime() : Infinity;
            return endMs > now;
          });
          this.allDraws = active;
          this.scanTickets = this.buildScanTicketsFromCards(active.slice(0, 9));
          this.activeScanIndex = Math.min(2, this.scanTickets.length - 1);
        },
        error: async () => {
          const t = await this.toast.create({
            message: this.translate.instant('WINNERS_PAGE.TOAST_LOAD_FAILED'),
            duration: 1400,
          });
          await t.present();
          this.allDraws = [];
          this.scanTickets = ['X922', 'B738', 'A492', 'C102', 'E551'];
        },
      });
  }

  private buildScanTicketsFromCards(cards: DrawCard[]): string[] {
    const fromCards = cards
      .map((c) => String(c.id ?? '').slice(-5).toUpperCase())
      .filter(Boolean);
    const fallback = ['X922', 'B738', 'A492', 'C102', 'E551'];
    return [...fromCards, ...fallback].slice(0, 5);
  }

  private startScanAnimation() {
    this.stopScanAnimation();
    this.isScanning = true;
    this.analysisLabel = this.translate.instant('WINNERS_PAGE.SCANNING');
    this.analysisProgress = 18;

    this.scanSub = interval(340).subscribe(() => {
      if (!this.scanTickets.length) return;
      this.activeScanIndex = (this.activeScanIndex + 1) % this.scanTickets.length;
    });

    this.progressSub = interval(220).subscribe(() => {
      const next = this.analysisProgress + Math.floor(Math.random() * 4 + 1);
      if (next >= 82) {
        this.analysisProgress = 82;
        this.analysisLabel = this.translate.instant('WINNERS_PAGE.VERIFYING');
        this.isScanning = false;
        this.progressSub?.unsubscribe();
        return;
      }
      this.analysisProgress = next;
    });
  }

  private stopScanAnimation() {
    this.scanSub?.unsubscribe();
    this.progressSub?.unsubscribe();
    this.scanSub = undefined;
    this.progressSub = undefined;
  }

  get centeredTicket(): string {
    if (!this.scanTickets.length) return '----';
    return this.scanTickets[this.activeScanIndex] || '----';
  }

  ticketAtOffset(offset: number): string {
    if (!this.scanTickets.length) return '----';
    const len = this.scanTickets.length;
    const i = (this.activeScanIndex + offset + len * 10) % len;
    return this.scanTickets[i] || '----';
  }

  get participantsSeen(): number {
    if (this.liveViewers > 0) return this.liveViewers;
    const base = 1200;
    const delta = (this.allDraws?.length ?? 0) * 17;
    return base + delta;
  }

  get verifiableLabel(): string {
    return this.translate.instant(
      this.provablyFair ? 'WINNERS_PAGE.VERIFIABLE_YES' : 'WINNERS_PAGE.VERIFIABLE_NO',
    );
  }

  get featureTitle(): string {
    return this.selectedRaffle?.title
      || this.translate.instant('WINNERS_PAGE.PREMIUM_PRODUCT');
  }

  get featureImage(): string {
    return this.selectedRaffle?.imageUrl || 'assets/img/placeholder.png';
  }

  get selectedAvatar(): string {
    return 'assets/img/profile.svg';
  }

  get selectedWinnerName(): string {
    return this.translate.instant('WINNERS_PAGE.CANDIDATE');
  }

  /** Classe CSS sûre pour le badge (allowlist, jamais de valeur serveur en style). */
  safeBadgeClass(tone?: string | null): string {
    const allowed = ['pink', 'gold', 'violet', 'danger', 'warn', 'hot'];
    return allowed.includes(String(tone ?? '')) ? `badge-${tone}` : 'badge-default';
  }

  selectDraw(w: DrawCard): void {
    this.selectedRaffle = w;
    this.scanTickets = this.buildScanTicketsFromCards(
      this.allDraws.filter((d) => d !== w).slice(0, 4),
    );
    this.activeScanIndex = Math.min(2, this.scanTickets.length - 1);
    this.proof = null;
    this.proofOpen = false;
  }

  backToList(): void {
    this.selectedRaffle = null;
    this.proof = null;
    this.proofOpen = false;
  }

  trackByDraw(index: number, item: DrawCard): string {
    return item.id || String(index);
  }

  trackByRecent(index: number, item: WinnerDto) {
    return item.raffleId || item.ticketCode || index;
  }

  back() {
    this.nav.navigateBack('/tabs/home');
  }

  async shareLive() {
    const url = this.shareService.liveShareUrl();
    const mode = await this.shareService.share({
      title: this.translate.instant('WINNERS_PAGE.SHARE_TITLE'),
      text: this.translate.instant('WINNERS_PAGE.SHARE_TEXT'),
      url,
    });
    if (mode === 'copied') {
      const t = await this.toast.create({
        message: this.translate.instant('WINNERS_PAGE.TOAST_LINK_COPIED'),
        duration: 1300,
      });
      await t.present();
    }
  }

  async seeResults() {
    const t = await this.toast.create({
      message: this.translate.instant('WINNERS_PAGE.TOAST_RESULTS_SOON'),
      duration: 1200,
    });
    await t.present();
  }

  toggleProof() {
    if (this.proofOpen) {
      this.proofOpen = false;
      return;
    }

    const raffleId = this.selectedRaffle?.id;
    if (!raffleId) return;

    if (this.proof && this.proof.raffleId === raffleId) {
      this.proofOpen = true;
      return;
    }

    this.proofLoading = true;
    this.api
      .fairness(raffleId)
      .pipe(finalize(() => (this.proofLoading = false)))
      .subscribe({
        next: (res) => {
          this.proof = res;
          this.proofOpen = true;
        },
        error: async () => {
          const t = await this.toast.create({
            message: this.translate.instant('WINNERS_PAGE.PROOF_ERROR'),
            duration: 1600,
          });
          await t.present();
        },
      });
  }

  async copyProofValue(value?: string | null) {
    const v = String(value ?? '').trim();
    if (!v || !navigator?.clipboard?.writeText) return;
    try {
      await navigator.clipboard.writeText(v);
      const t = await this.toast.create({
        message: this.translate.instant('WINNERS_PAGE.PROOF_COPIED'),
        duration: 1200,
      });
      await t.present();
    } catch {
      // copie best-effort
    }
  }

  short(value?: string | null, head = 10, tail = 6): string {
    const v = String(value ?? '').trim();
    if (v.length <= head + tail + 1) return v;
    return `${v.slice(0, head)}…${v.slice(-tail)}`;
  }

  async openWinner(w: WinnerDto) {
    const t = await this.toast.create({
      message: this.translate.instant('WINNERS_PAGE.TOAST_WINNER', {
        winner: w.winnerName,
        ticket: w.ticketCode,
      }),
      duration: 1400,
    });
    await t.present();
  }

  avatarSrc(a?: string | null): string {
    const s = String(a ?? '').trim();
    if (!s || s === 'null' || s === 'undefined') return 'assets/img/profile.svg';
    if (s.startsWith('http://') || s.startsWith('https://')) return s;
    if (s.startsWith('data:') || s.startsWith('assets/')) return s;
    if (s.startsWith('../assets/')) return s.replace('../', '');
    return `assets/img/${s}`;
  }

  private connectRealtime() {
    this.liveSocket.connect();
    this.liveSub?.unsubscribe();
    this.liveSub = this.liveSocket.stream().subscribe((state) => {
      if (!state) return;
      this.applyLiveState(state);
    });
  }

  private applyLiveState(state: LiveDrawState) {
    // Ne pas écraser le contexte si l'utilisateur est en vue détail.
    if (this.selectedRaffle) return;

    this.hasRealtime = true;
    this.stopScanAnimation();

    this.liveViewers = Number.isFinite(state?.viewersLive)
      ? Math.max(0, Number(state.viewersLive))
      : this.liveViewers;

    this.provablyFair = state?.provablyFair !== false;

    this.analysisProgress = Number.isFinite(state?.analysisProgress)
      ? Math.max(0, Math.min(100, Number(state.analysisProgress)))
      : this.analysisProgress;

    this.analysisLabel =
      state?.analysisLabel === 'VERIFYING...'
        ? this.translate.instant('WINNERS_PAGE.VERIFYING')
        : this.translate.instant('WINNERS_PAGE.SCANNING');

    const scanTickets = Array.isArray(state?.scan?.tickets)
      ? state.scan.tickets
          .map((x) => String(x ?? '').trim().toUpperCase())
          .filter(Boolean)
      : [];

    if (scanTickets.length) {
      this.scanTickets = scanTickets;
      const nextIdx = Number(state?.scan?.activeIndex ?? 0);
      this.activeScanIndex = Math.max(
        0,
        Math.min(scanTickets.length - 1, Number.isFinite(nextIdx) ? nextIdx : 0),
      );
    }

    const recent = Array.isArray(state?.recent) ? state.recent : [];
    if (recent.length) {
      this.recent = recent.slice(1, 9);
    }
  }
}
