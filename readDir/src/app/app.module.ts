import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScrollDispatcher, ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AddServerComComponent } from './add-server-com/add-server-com.component';
import { OutputTableComponent } from './output-table/output-table.component';

@NgModule({
  imports: [
    ScrollDispatchModule,
    CommonModule,
    BrowserModule,
	HttpClientModule,
  ],
  exports: [ CommonModule , ScrollDispatchModule],
  declarations: [
    AppComponent,
    AddServerComComponent,
    OutputTableComponent
  ],
  providers: [ScrollDispatcher],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { 

}
