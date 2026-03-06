import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  { path: 'account', redirectTo: 'tabs/account', pathMatch: 'full' },

  { path: '**', redirectTo: 'landing' },
  {
    path: 'admin/create-raffle',
    loadChildren: () => import('./pages/admin/create-raffle/create-raffle.module').then( m => m.CreateRafflePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'raffle-details/:id',
    loadChildren: () => import('./pages/raffle-details/raffle-details.module').then( m => m.RaffleDetailsPageModule)
  },
  {
    path: 'payment-confirmation',
    loadChildren: () => import('./pages/payment-confirmation/payment-confirmation.module').then( m => m.PaymentConfirmationPageModule)
  },
  {
    path: 'participations',
    loadChildren: () => import('./pages/participations/participations.module').then( m => m.ParticipationsPageModule)
  },
  {
    path: 'ticket-details',
    loadChildren: () => import('./pages/ticket-details/ticket-details.module').then( m => m.TicketDetailsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
