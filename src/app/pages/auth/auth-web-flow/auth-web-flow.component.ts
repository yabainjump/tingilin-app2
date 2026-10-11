import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: { client_id: string; callback: (response: { credential: string }) => void }) => void;
          renderButton: (parent: HTMLElement, options: { theme: string; size: string }) => void;
          disableAutoSelect: () => void;
        };
      };
    };
  }
}

@Component({
  selector: '#auth-web-flow',
  templateUrl: './auth-web-flow.component.html',
  styleUrls: ['auth-web-flow.component.scss'],
})
export class AuthWebFlowComponent implements OnInit {
  form: FormGroup;
  private googleInitialized = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      idToken: [''],
      region: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Load user region from profile if available
    this.loadUserRegion();
    // Load Google Identity Services script
    this.loadGoogleScript();
  }

  loadUserRegion(): void {
    const region = this.authService.user?.region;
    if (region) {
      this.form.patchValue({ region });
    }
  }

  loadGoogleScript(): void {
    if (window.google && window.google.accounts) {
      this.initializeGoogle();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => this.initializeGoogle();
    document.head.appendChild(script);
  }

  initializeGoogle(): void {
    if (this.googleInitialized) return;
    this.googleInitialized = true;

    const clientId = this.authService.getGoogleClientId(); // Will be added to auth.service
    if (!clientId) {
      console.warn('Google Client ID not configured');
      return;
    }

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: (response: { credential: string }) => this.handleCredentialResponse(response),
    });

    // Render the button in the designated container
    const buttonDiv = document.getElementById('google-signin-button');
    if (buttonDiv) {
      window.google.accounts.id.renderButton(buttonDiv, {
        theme: 'outline',
        size: 'large',
      });
    }
  }

  async handleCredentialResponse(response: { credential: string }): Promise<void> {
    const idToken = response.credential;
    const region = this.form.value.region;

    try {
      await this.authService.loginWithGoogle(idToken, region);
    } catch (error) {
      console.error('Google sign-in failed:', error);
      // Show error to user
    }
  }
}
