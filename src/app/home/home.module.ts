import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EmailVerifyBannerComponent } from '../shared/engagement/email-verify-banner.component';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { CountdownEnergyComponent } from '../shared/ui/countdown-energy/countdown-energy.component';
import { LiveActivityTickerComponent } from '../shared/engagement/live-activity-ticker.component';
import { RewardProgressComponent } from '../shared/engagement/reward-progress.component';
import { TrustStatsComponent } from '../shared/engagement/trust-stats.component';
import { NextPrizePollComponent } from '../shared/engagement/next-prize-poll.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule,
    CountdownEnergyComponent,
    LiveActivityTickerComponent,
    RewardProgressComponent,
    TrustStatsComponent,
    NextPrizePollComponent,
    EmailVerifyBannerComponent,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
