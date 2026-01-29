import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: false,
  // imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  
})
export class LandingPage {
  ticketPrice = 100;
  sold = 750;
  total = 1000;
  countdown = '04:23:10';

  get progress(): number {
    return this.total === 0 ? 0 : this.sold / this.total;
  }
}
