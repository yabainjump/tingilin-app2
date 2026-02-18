import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaffleDetailsPage } from './raffle-details.page';

const routes: Routes = [
  {
    path: '',
    component: RaffleDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaffleDetailsPageRoutingModule {}
