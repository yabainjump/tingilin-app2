import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-sent',
  templateUrl: './forgot-password-sent.page.html',
  styleUrls: ['./forgot-password-sent.page.scss'],
  standalone: false
})
export class ForgotPasswordSentPage implements OnDestroy {
  secondsLeft = 59;
  private timerId: any;
  identifier = '';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.identifier = (nav?.extras?.state as any)?.identifier || '';
  }

  ionViewDidEnter(): void {
    this.startCountdown();
  }

  ionViewWillLeave(): void {
    this.stopCountdown();
  }

  ngOnDestroy(): void {
    this.stopCountdown();
  }

  startCountdown(): void {
    this.stopCountdown();
    this.secondsLeft = 59;
    this.timerId = setInterval(() => {
      this.secondsLeft = Math.max(0, this.secondsLeft - 1);
      if (this.secondsLeft === 0) this.stopCountdown();
    }, 1000);
  }

  stopCountdown(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  openMailApp(): void {
    // Simple (web/dev). Sur mobile natif, on pourra brancher AppLauncher plus tard.
    window.location.href = 'mailto:';
  }

  backToLogin(): void {
    this.router.navigateByUrl('/auth/login');
  }

  resend(): void {
    // UI only (on branchera l’API après)
    if (this.secondsLeft > 0) return;
    this.startCountdown();
  }

  get mmss(): string {
    const mm = String(Math.floor(this.secondsLeft / 60)).padStart(2, '0');
    const ss = String(this.secondsLeft % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  }
}
