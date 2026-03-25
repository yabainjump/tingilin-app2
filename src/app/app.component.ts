import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LoadingService } from './core/loading/loading.service';
import { AuthStateService } from './services/auth/auth-state.service';
import { filter, Subscription } from 'rxjs';
import { LanguageService } from './services/i18n/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit, OnDestroy {
  loading$ = this.loading.loading$;
  private navigationStartSub?: Subscription;

  constructor(
    private loading: LoadingService,
    private authState: AuthStateService,
    private language: LanguageService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    this.language.init();
    this.authState.bootstrap();
    this.navigationStartSub = this.router.events
      .pipe(filter((event): event is NavigationStart => event instanceof NavigationStart))
      .subscribe(() => this.blurActiveElement());
  }

  ngOnDestroy(): void {
    this.navigationStartSub?.unsubscribe();
  }

  private blurActiveElement(): void {
    const activeElement = this.document.activeElement;
    if (!(activeElement instanceof HTMLElement)) {
      return;
    }

    const isRootElement = activeElement.tagName === 'BODY' || activeElement.tagName === 'HTML';
    if (!isRootElement) {
      activeElement.blur();
    }
  }
}
