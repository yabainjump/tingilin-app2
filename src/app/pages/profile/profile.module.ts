import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { TranslateModule } from '@ngx-translate/core';
import { EmptyStateComponent } from '../../shared/ui/empty-state/empty-state.component';
import { PushPrefsCardComponent } from './push-prefs-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileRoutingModule,
    TranslateModule,
    EmptyStateComponent,
    PushPrefsCardComponent,
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
