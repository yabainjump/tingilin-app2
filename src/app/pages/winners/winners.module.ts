import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinnersPageRoutingModule } from './winners-routing.module';

import { WinnersPage } from './winners.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinnersPageRoutingModule
  ],
  declarations: [WinnersPage]
})
export class WinnersPageModule {}
