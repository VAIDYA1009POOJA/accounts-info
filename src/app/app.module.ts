import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FetchDataService } from './fetch-data.service';

import { AppComponent } from './app.component';
import { DisplayChangeComponent } from './display-change/display-change.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayChangeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FetchDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
