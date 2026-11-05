import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

/**
 * Empêche l'accès aux pages publiques (landing, login, register) si
 * l'utilisateur est déjà connecté. Redirige vers /home.
 */
@Injectable({ providedIn: 'root' })
export class GuestGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) return true;
    this.router.navigateByUrl('/home', { replaceUrl: true });
    return false;
  }
}
