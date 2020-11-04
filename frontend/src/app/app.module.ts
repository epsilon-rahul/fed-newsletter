import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import {AdminModule } from './admin/admin.module';
import { EventComponent } from './even/event/event.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HashLocationStrategy, LocationStrategy, PathLocationStrategy  } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MainModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    // {provide : LocationStrategy , useClass: PathLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
