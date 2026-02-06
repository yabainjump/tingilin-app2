import { Component } from '@angular/core';
import { LoadingService } from './core/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
   loading$ = this.loading.loading$;
  constructor(private loading: LoadingService) {}
}
