import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WinnersPage } from './winners.page';

const routes: Routes = [
  {
    path: '',
    component: WinnersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinnersPageRoutingModule {}
