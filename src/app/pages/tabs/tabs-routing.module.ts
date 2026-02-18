import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'tickets',
        loadChildren: () =>
          import('../tickets/tickets.module').then((m) => m.TicketsPageModule),
      },
      {
        path: 'winners',
        loadChildren: () =>
          import('../winners/winners.module').then((m) => m.WinnersPageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfilePageModule),
      },

      {
        path: 'edit-profile',
        loadChildren: () =>
          import('../edit-profile/edit-profile.module').then(
            (m) => m.EditProfilePageModule,
          ),
      },
      {
        path: 'raffle-details/:id',
        loadChildren: () =>
          import('../raffle-details/raffle-details.module').then(
            (m) => m.RaffleDetailsPageModule,
          ),
      },

      {
        path: 'admin/create-raffle',
        loadChildren: () =>
          import('../admin/create-raffle/create-raffle.module').then(
            (m) => m.CreateRafflePageModule,
          ),
      },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
