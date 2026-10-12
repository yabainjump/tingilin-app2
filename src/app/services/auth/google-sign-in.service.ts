import { Injectable } from '@angular/core';
import { SocialLogin } from '@capgo/capacitor-social-login';
import { environment } from 'src/environments/environment';

export type GoogleSignInErrorCode =
  | 'NOT_CONFIGURED'
  | 'MISSING_ID_TOKEN';

export class GoogleSignInError extends Error {
  constructor(readonly code: GoogleSignInErrorCode) {
    super(code);
    this.name = 'GoogleSignInError';
  }
}

@Injectable({ providedIn: 'root' })
export class GoogleSignInService {
  private initialization: Promise<void> | null = null;

  isConfigured(): boolean {
    return this.clientId.length > 0;
  }

  async initialize(): Promise<void> {
    if (!this.isConfigured()) return;
    if (this.initialization) return this.initialization;

    this.initialization = SocialLogin.initialize({
      google: {
        webClientId: this.clientId,
        mode: 'online',
      },
    });

    try {
      await this.initialization;
    } catch (error) {
      // Autorise une nouvelle tentative si le SDK n'etait pas encore disponible.
      this.initialization = null;
      throw error;
    }
  }

  async signIn(): Promise<string> {
    if (!this.isConfigured()) {
      throw new GoogleSignInError('NOT_CONFIGURED');
    }

    await this.initialize();
    const login = await SocialLogin.login({
      provider: 'google',
      options: {
        scopes: ['email', 'profile'],
        filterByAuthorizedAccounts: false,
        autoSelectEnabled: false,
      },
    });

    const result = login.result;
    const idToken =
      result.responseType === 'online' ? String(result.idToken ?? '').trim() : '';
    if (!idToken) {
      throw new GoogleSignInError('MISSING_ID_TOKEN');
    }

    return idToken;
  }

  isUserCancellation(error: unknown): boolean {
    return (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      String((error as { code?: unknown }).code ?? '') === 'USER_CANCELLED'
    );
  }

  private get clientId(): string {
    return String(environment.googleWebClientId ?? '').trim();
  }
}
