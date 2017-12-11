import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
	MatButtonModule,
	MatIconModule
} from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DaySummaryComponent } from './day-summary/day-summary.component';

import { ActivityService } from './activity.service';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DaySummaryComponent
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
    AppRoutingModule,
		MatButtonModule,
		MatIconModule
  ],
  providers: [ ActivityService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
