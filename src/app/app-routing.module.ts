import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth-guard';
import { NoPreloading, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },

  {
    path: 'landing',
    loadChildren: () =>
      import('./pages/landing/landing.module').then((m) => m.LandingPageModule),
  },

  {
    path: 'auth',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadChildren: () =>
          import('./pages/auth/login/login.module').then(
            (m) => m.LoginPageModule,
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./pages/auth/register/register.module').then(
            (m) => m.RegisterPageModule,
          ),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('./pages/auth/forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordPageModule,
          ),
      },
      {
        path: 'forgot-password-sent',
        loadChildren: () =>
          import('./pages/auth/forgot-password-sent/forgot-password-sent.module').then(
            (m) => m.ForgotPasswordSentPageModule,
          ),
      },
    ],
  },

  {
    path: 'onboarding',
    loadChildren: () =>
      import('./pages/onboarding/onboarding.module').then(
        (m) => m.OnboardingPageModule,
      ),
  },

  {
    path: 'tabs',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },

  // { path: 'tabs', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) },

  // redirects (évite les doublons)
  { path: 'home', redirectTo: 'tabs/home', pathMatch: 'full' },
  { path: 'tickets', redirectTo: 'tabs/tickets', pathMatch: 'full' },
  { path: 'winners', redirectTo: 'tabs/winners', pathMatch: 'full' },
  { path: 'referral', redirectTo: 'tabs/referral', pathMatch: 'full' },
  { path: 'account', redirectTo: 'tabs/profile', pathMatch: 'full' },

  {
    path: 'admin/create-raffle',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/admin/create-raffle/create-raffle.module').then(
        (m) => m.CreateRafflePageModule,
      ),
  },
  {
    path: 'edit-profile',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/edit-profile/edit-profile.module').then(
        (m) => m.EditProfilePageModule,
      ),
  },
  {
    path: 'support',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/support/support.module').then((m) => m.SupportPageModule),
  },
  {
    path: 'raffle-details/:id',
    loadChildren: () =>
      import('./pages/raffle-details/raffle-details.module').then(
        (m) => m.RaffleDetailsPageModule,
      ),
  },
  {
    path: 'payment-confirmation',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/payment-confirmation/payment-confirmation.module').then(
        (m) => m.PaymentConfirmationPageModule,
      ),
  },
  {
    path: 'participations',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/participations/participations.module').then(
        (m) => m.ParticipationsPageModule,
      ),
  },
  {
    path: 'ticket-details/:raffleId',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/ticket-details/ticket-details.module').then(
        (m) => m.TicketDetailsPageModule,
      ),
  },
  {
    path: 'notifications',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/notifications/notifications.module').then(
        (m) => m.NotificationsPageModule,
      ),
  },
  { path: '**', redirectTo: 'landing' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
