import {
  CONFIG,
  APP_NAME,
  APP_VERSION,
  COLLECTION_ENABLED,
  UserTrackingService,
  ScreenTrackingService,
  AngularFireAnalyticsModule,
} from '@angular/fire/analytics';
import {
  INSTRUMENTATION_ENABLED,
  DATA_COLLECTION_ENABLED,
  AngularFirePerformanceModule,
  PerformanceMonitoringService,
} from '@angular/fire/performance';
import {
  ORIGIN as FUNCTIONS_ORIGIN,
  NEW_ORIGIN_BEHAVIOR,
} from '@angular/fire/functions';
import { AngularFireModule } from '@angular/fire';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/auth';
import { USE_EMULATOR as USE_DATABASE_EMULATOR } from '@angular/fire/database';
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/firestore';
import { USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/functions';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { LandingPage } from './containers/landing/landing.page';
import { DashboardPage } from './containers/dashboard/dashboard.page';
import { ImportFromFilePage } from './containers/import-from-file/import-from-file.page';

@NgModule({
  declarations: [AppComponent, LandingPage, DashboardPage, ImportFromFilePage],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirePerformanceModule,
  ],
  providers: [
    UserTrackingService,
    ScreenTrackingService,
    PerformanceMonitoringService,
    // Google Analytics Providers
    {
      provide: COLLECTION_ENABLED,
      useValue: environment.production,
    },
    {
      provide: CONFIG,
      useValue: {
        send_page_view: true,
        allow_ad_personalization_signals: false,
        anonymize_ip: true,
      },
    },
    {
      provide: APP_NAME,
      useValue: environment.appName,
    },
    {
      provide: APP_VERSION,
      useValue: environment.appVersion,
    },
    // Firebase Performance Monitoring
    {
      provide: INSTRUMENTATION_ENABLED,
      useValue: environment.production,
    },
    {
      provide: DATA_COLLECTION_ENABLED,
      useValue: environment.production,
    },
    // Firebase Emulators Providers
    {
      provide: USE_AUTH_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 9099] : undefined,
    },
    {
      provide: USE_DATABASE_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 9000] : undefined,
    },
    {
      provide: USE_FIRESTORE_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 8080] : undefined,
    },
    {
      provide: USE_FUNCTIONS_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 5002] : undefined,
    },
    { provide: NEW_ORIGIN_BEHAVIOR, useValue: true },
    {
      provide: FUNCTIONS_ORIGIN,
      useFactory: () => (isDevMode() ? undefined : location.origin),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
