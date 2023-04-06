import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
