import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';
import { AuthStateService } from '../../../services/auth/auth-state.service';

export type VerifyEmailState = 'LOADING' | 'SUCCESS' | 'INVALID';

/** Format du jeton envoye par l'API (32 octets en base64url). */
export const EMAIL_TOKEN_PATTERN = /^[A-Za-z0-9_-]{43}$/;

/**
 * Ouverte depuis le lien de l'email "Confirmer mon email". Confirme l'adresse
 * puis envoie le joueur sur l'accueil (ou sur la connexion, qui l'y renverra,
 * si ce navigateur n'a pas de session).
 */
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
  standalone: false,
})
export class VerifyEmailPage implements OnInit, OnDestroy {
  state: VerifyEmailState = 'LOADING';
  loggedIn = false;
  private redirectTimer?: ReturnType<typeof setTimeout>;
  static readonly REDIRECT_DELAY_MS = 1800;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly auth: AuthService,
    private readonly authState: AuthStateService,
  ) {}

  async ngOnInit(): Promise<void> {
    const token = String(this.route.snapshot.queryParamMap.get('token') ?? '').trim();
    this.loggedIn = this.auth.isLoggedIn();

    // Le jeton ne reste pas dans l'historique / la barre d'adresse.
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
      replaceUrl: true,
    });

    if (!EMAIL_TOKEN_PATTERN.test(token)) {
      this.state = 'INVALID';
      return;
    }

    try {
      await firstValueFrom(this.auth.verifyEmail(token));
      this.state = 'SUCCESS';
      if (this.loggedIn) this.authState.refreshMe();
      this.redirectTimer = setTimeout(
        () => void this.continue(),
        VerifyEmailPage.REDIRECT_DELAY_MS,
      );
    } catch {
      this.state = 'INVALID';
    }
  }

  ngOnDestroy(): void {
    if (this.redirectTimer) clearTimeout(this.redirectTimer);
  }

  async continue(): Promise<void> {
    if (this.redirectTimer) clearTimeout(this.redirectTimer);
    if (this.loggedIn) {
      await this.router.navigate(['/tabs/home'], { replaceUrl: true });
      return;
    }
    await this.router.navigate(['/auth/login'], {
      replaceUrl: true,
      queryParams: { redirect: '/tabs/home' },
    });
  }
}
