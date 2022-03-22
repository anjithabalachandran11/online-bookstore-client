import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SiteFrameworkModule } from './site-framework/site-framework.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteFrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
