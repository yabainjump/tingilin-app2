import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketDetailsPageRoutingModule } from './ticket-details-routing.module';

import { TicketDetailsPage } from './ticket-details.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketDetailsPageRoutingModule,
    TranslateModule
  ],
  declarations: [TicketDetailsPage]
})
export class TicketDetailsPageModule {}
