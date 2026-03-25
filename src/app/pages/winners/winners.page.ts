import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Subscription, finalize, interval } from 'rxjs';
import {
  WinnersApiService,
  WinnerDto,
} from 'src/app/services/winners/winners-api.service';
import { ShareService } from 'src/app/services/share/share.service';
import {
  LiveDrawState,
  WinnersLiveSocketService,
} from 'src/app/services/winners/winners-live-socket.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.page.html',
  styleUrls: ['./winners.page.scss'],
  standalone: false,
})
export class WinnersPage implements OnInit {
  loading = true;

  featured: WinnerDto | null = null;
  recent: WinnerDto[] = [];
  scanTickets: string[] = [];
  activeScanIndex = 0;
  analysisProgress = 0;
  analysisLabel = '';
  isScanning = true;
  liveViewers = 0;
  trustPercent = 99.9;
  hasRealtime = false;

  private scanSub?: Subscription;
  private progressSub?: Subscription;
  private liveSub?: Subscription;

  constructor(
    private api: WinnersApiService,
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
    this.stopScanAnimation();
    this.liveSub?.unsubscribe();
    this.liveSub = undefined;
    this.liveSocket.disconnect();
    this.hasRealtime = false;
  }

  ngOnDestroy(): void {
    this.stopScanAnimation();
    this.liveSub?.unsubscribe();
    this.liveSub = undefined;
    this.liveSocket.disconnect();
    this.hasRealtime = false;
  }

  load() {
    this.loading = true;
    this.api
      .list(30)
      .pipe(
        finalize(() => {
          this.loading = false;
          if (!this.hasRealtime) {
            this.startScanAnimation();
          }
        }),
      )
      .subscribe({
        next: (res: any) => {
          const list = Array.isArray(res) ? res : (res?.data ?? []);
          this.featured = list.length ? list[0] : null;
          this.recent = list.slice(1, 9);
          this.scanTickets = this.buildScanTickets(this.featured, this.recent);
          this.activeScanIndex = Math.min(2, this.scanTickets.length - 1);
        },
        error: async () => {
          const t = await this.toast.create({
            message: this.translate.instant('WINNERS_PAGE.TOAST_LOAD_FAILED'),
            duration: 1400,
          });
          await t.present();
          this.featured = null;
          this.recent = [];
          this.scanTickets = this.buildScanTickets(null, []);
        },
      });
  }

  private buildScanTickets(
    featured: WinnerDto | null,
    recent: WinnerDto[],
  ): string[] {
    const fromApi = [
      featured?.ticketCode,
      ...recent.map((x) => x.ticketCode),
    ]
      .map((x) => String(x ?? '').trim().toUpperCase())
      .filter(Boolean);

    const fallback = ['X922', 'B738', 'A492', 'C102', 'E551'];
    const merged = [...fromApi, ...fallback];
    return merged.slice(0, 5);
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
    const delta = (this.recent?.length ?? 0) * 17;
    return base + delta;
  }

  get trustPercentLabel(): string {
    return `${Math.max(0, Math.min(100, this.trustPercent)).toFixed(1)}%`;
  }

  get featureTitle(): string {
    return this.featured?.prizeTitle || this.translate.instant('WINNERS_PAGE.PREMIUM_PRODUCT');
  }

  get featureImage(): string {
    return this.featured?.prizeImageUrl || 'assets/img/placeholder.png';
  }

  get selectedAvatar(): string {
    return this.avatarSrc(this.featured?.avatar);
  }

  get selectedWinnerName(): string {
    return this.featured?.winnerName || this.translate.instant('WINNERS_PAGE.CANDIDATE');
  }

  trackByRecent(index: number, item: WinnerDto) {
    return item.raffleId || item.ticketCode || index;
  }

  avatarUrl(a?: string): string {
    if (!a) return 'assets/img/placeholder.png';
    if (a === 'defpic.jpg') return 'assets/img/defpic.jpg';
    if (a.startsWith('http') || a.startsWith('assets/')) return a;
    return a;
  }

  timeAgo(iso: string): string {
    const d = new Date(iso).getTime();
    const diff = Math.max(0, Date.now() - d);

    const min = Math.floor(diff / 60000);
    if (min < 1) return 'Just now';
    if (min < 60) return `Drawn ${min} mins ago`;

    const h = Math.floor(min / 60);
    if (h < 24) return `${h}h ago`;

    const days = Math.floor(h / 24);
    if (days === 1) return 'Yesterday';
    return `${days}d ago`;
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

  private connectRealtime() {
    this.liveSocket.connect();
    this.liveSub?.unsubscribe();
    this.liveSub = this.liveSocket.stream().subscribe((state) => {
      if (!state) return;
      this.applyLiveState(state);
    });
  }

  private applyLiveState(state: LiveDrawState) {
    this.hasRealtime = true;
    this.stopScanAnimation();

    this.liveViewers = Number.isFinite(state?.viewersLive)
      ? Math.max(0, Number(state.viewersLive))
      : this.liveViewers;

    this.trustPercent = Number.isFinite(state?.trustPercent)
      ? Number(state.trustPercent)
      : this.trustPercent;

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
      this.featured = recent[0] || null;
      this.recent = recent.slice(1, 9);
    }
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

    if (!s || s === 'null' || s === 'undefined') {
      return '../../../assets/img/profile.svg';
    }

    if (s.startsWith('http://') || s.startsWith('https://')) {
      return s;
    }

    if (s.startsWith('data:')) {
      return s;
    }

    if (s.startsWith('assets/')) {
      return s;
    }

    if (s.startsWith('../assets/')) {
      return s.replace('../', '');
    }
    if (s.startsWith('../asset/')) {
      return s.replace('../asset/', 'assets/');
    }

    return `assets/img/${s}`;
  }
}
