import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddServerComComponent } from './add-server-com/add-server-com.component';
import { OutputTableComponent } from './output-table/output-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AddServerComComponent,
    OutputTableComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
