import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavService } from './services/sidenav.service';
import { RoutesService } from './services/routes.service';
import { MarkerService } from './services/marker.service';
import { ServerService } from './services/server.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SidenavService, RoutesService, MarkerService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
