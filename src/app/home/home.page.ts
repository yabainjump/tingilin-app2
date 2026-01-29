import { Component } from '@angular/core';

type Category = 'All' | 'Electronics' | 'Cash' | 'Vehicles' | 'Luxury';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {
  categories: Category[] = ['All', 'Electronics', 'Cash', 'Vehicles', 'Luxury'];
  selected: Category = 'All';

  select(cat: Category) {
    this.selected = cat;
  }
}
