import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FetchDataService } from './fetch-data.service';
import { SortService } from './sort.service';

import { AppComponent } from './app.component';
import { DisplayChangeComponent } from './display-change/display-change.component';
import { SortColumnComponent } from './sort-column/sort-column.component';
import { SortTableDirective } from './sort-table.directive';


@NgModule({
  declarations: [
    AppComponent,
    DisplayChangeComponent,
    SortColumnComponent,
    SortTableDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FetchDataService,
    SortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
