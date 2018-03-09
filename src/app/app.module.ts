import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {EventsComponent} from './events/events.component';
import {EventsService} from './events/events.service';
import {CountdownComponent} from './countdown/countdown.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {HallOfFameComponent} from './hall-of-fame/hall-of-fame.component';
import {HallOfFameEntryComponent} from './hall-of-fame-entry/hall-of-fame-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    CountdownComponent,
    HallOfFameComponent,
    HallOfFameEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent, EventsComponent]
})
export class AppModule {
}
