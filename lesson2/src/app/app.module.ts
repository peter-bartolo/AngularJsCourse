import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { MainLayoutComponentComponent } from './main-layout-component/main-layout-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    MainLayoutComponentComponent,
    FooterComponentComponent,
    NavigationComponentComponent,
    ContentComponentComponent
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
