import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollableTabsComponent } from './scrollable-tabs/scrollable-tabs.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HorizontalGridComponent } from './horizontal-grid/horizontal-grid.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableTabsComponent,
    SlideshowComponent,
    HorizontalGridComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
