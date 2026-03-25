import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipationsPageRoutingModule } from './participations-routing.module';

import { ParticipationsPage } from './participations.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipationsPageRoutingModule,
    TranslateModule
  ],
  declarations: [ParticipationsPage]
})
export class ParticipationsPageModule {}
