import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaySummaryComponent } from './day-summary/day-summary.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ActivityEditorComponent } from './activity-editor/activity-editor.component';

const routes: Routes = [
{ path: '', component: WelcomeComponent },
{ path: 'summary/:day', component: DaySummaryComponent },
{ path: 'editor', component: ActivityEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
