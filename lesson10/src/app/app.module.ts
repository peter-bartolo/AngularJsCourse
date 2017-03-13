import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, XHRBackend, Http, BaseRequestOptions} from '@angular/http';

import { AppComponent } from './app.component';
import {MockBackend} from "@angular/http/testing";
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
