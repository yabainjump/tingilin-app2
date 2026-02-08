import { Component, OnInit } from '@angular/core';
import { LoadingService } from './core/loading/loading.service';
import { AuthStateService } from './services/auth/auth-state.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  loading$ = this.loading.loading$;
  constructor(
    private loading: LoadingService,
    private authState: AuthStateService,
  ) {}

  ngOnInit(): void {
    this.authState.bootstrap();
  }
}
