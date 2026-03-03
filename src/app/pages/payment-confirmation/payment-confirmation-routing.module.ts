import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentConfirmationPage } from './payment-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentConfirmationPageRoutingModule {}
