import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: false,
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   onAdd(): void {
    // Placeholder (plus tard: modal / buy ticket / create draw etc.)
    console.log('Add action');
  }

}
