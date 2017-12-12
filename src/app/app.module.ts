import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
	MatButtonModule,
	MatIconModule,
	MatCardModule,
	MatInputModule,
	MatFormFieldModule,
	MatSelectModule
} from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DaySummaryComponent } from './day-summary/day-summary.component';

import { ActivityService } from './activity.service';
import { ImageCategoryPipe } from './image-category.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { ActivityEditorComponent } from './activity-editor/activity-editor.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DaySummaryComponent,
    ImageCategoryPipe,
    WelcomeComponent,
    ActivityEditorComponent
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		FlexLayoutModule,
    AppRoutingModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule
  ],
  providers: [ ActivityService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
