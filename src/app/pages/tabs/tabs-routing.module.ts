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
        path: 'account',
        loadChildren: () =>
          import('../account/account.module').then((m) => m.AccountPageModule),
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

