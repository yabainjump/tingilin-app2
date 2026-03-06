import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferralPage } from './referral.page';

const routes: Routes = [
  {
    path: '',
    component: ReferralPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferralPageRoutingModule {}
