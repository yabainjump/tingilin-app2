import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipationsPage } from './participations.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipationsPageRoutingModule {}
