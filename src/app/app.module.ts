import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import {HttpClientModule} from "@angular/common/http";
import { TestComponent } from './test/test.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
