import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRafflePage } from './create-raffle.page';

const routes: Routes = [
  {
    path: '',
    component: CreateRafflePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRafflePageRoutingModule {}
