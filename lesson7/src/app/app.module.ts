import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { TrimPipe } from './trim.pipe';
import { DoublePipe } from './double.pipe';
import { FilterbyidPipe } from './filterbyid.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    TrimPipe,
    DoublePipe,
    FilterbyidPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
