import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import {ChatService} from "./Chat-Service";
import { CookieDispenserComponent } from './cookie-dispenser/cookie-dispenser.component';
import { CookieFactoryComponent } from './cookie-factory/cookie-factory.component';
import { CookieInfoComponent } from './cookie-info/cookie-info.component';
import {CookieService} from "./Cookie-Service";

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CookieDispenserComponent,
    CookieFactoryComponent,
    CookieInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChatService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
