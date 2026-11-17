import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinnersPageRoutingModule } from './winners-routing.module';

import { WinnersPage } from './winners.page';
import { TranslateModule } from '@ngx-translate/core';
import { TrustStatsComponent } from 'src/app/shared/engagement/trust-stats.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinnersPageRoutingModule,
    TranslateModule,
    TrustStatsComponent,
  ],
  declarations: [WinnersPage]
})
export class WinnersPageModule {}
