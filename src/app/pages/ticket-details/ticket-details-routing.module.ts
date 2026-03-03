import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketDetailsPage } from './ticket-details.page';

const routes: Routes = [
  {
    path: '',
    component: TicketDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketDetailsPageRoutingModule {}
