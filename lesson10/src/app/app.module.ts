import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, XHRBackend, Http, BaseRequestOptions} from '@angular/http';

import { AppComponent } from './app.component';
import {MockBackend} from "@angular/http/testing";
import { ListComponent } from './list/list.component';
import { ErrorComponent } from './error/error.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {ListService} from "./list.service";
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ErrorComponent,
    CounterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  providers: [
    /*{provide: XHRBackend, useClass: MockBackend},*/
    BaseRequestOptions,
    MockBackend,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: (backend, opts) => {
        return new Http(backend, opts)
      }
    },
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
