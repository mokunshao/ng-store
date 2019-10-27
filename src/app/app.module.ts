import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollableTabsComponent } from './scrollable-tabs/scrollable-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableTabsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
