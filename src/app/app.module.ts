import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { LoadingInterceptor } from './core/loading/loading.interceptor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AuthInterceptor } from './services/auth/auth.interceptor';
import { AuthTokenStorageService } from './services/auth/auth-token-storage.service';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageSwitchModule } from './shared/language-switch/language-switch.module';
import { environment } from 'src/environments/environment';
import { OfflineActionQueueService } from './services/offline/offline-action-queue.service';
import { GoogleSignInService } from './services/auth/google-sign-in.service';

export function initializeAuthTokenStorage(
  tokenStorage: AuthTokenStorageService,
) {
  return () => tokenStorage.init();
}

export function initializeOfflineQueue(queue: OfflineActionQueueService) {
  return () => queue.init();
}

export function initializeGoogleSignIn(googleSignIn: GoogleSignInService) {
  // Une panne du SDK Google ne doit pas bloquer le demarrage de l'application.
  return () => googleSignIn.initialize().catch(() => undefined);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    LanguageSwitchModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
    TranslateModule.forRoot({
      fallbackLang: 'fr',
    }),
  ],
  providers: [
    ...provideTranslateHttpLoader({
      prefix: './assets/i18n/',
      suffix: '.json',
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAuthTokenStorage,
      deps: [AuthTokenStorageService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeOfflineQueue,
      deps: [OfflineActionQueueService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeGoogleSignIn,
      deps: [GoogleSignInService],
      multi: true,
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
