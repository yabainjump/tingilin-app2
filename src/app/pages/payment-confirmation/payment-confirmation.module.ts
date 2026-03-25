import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentConfirmationPageRoutingModule } from './payment-confirmation-routing.module';

import { PaymentConfirmationPage } from './payment-confirmation.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentConfirmationPageRoutingModule,
    TranslateModule
  ],
  declarations: [PaymentConfirmationPage]
})
export class PaymentConfirmationPageModule {}
