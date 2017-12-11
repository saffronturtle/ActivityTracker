import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaySummaryComponent } from './day-summary/day-summary.component';

const routes: Routes = [
{ path: ':day', component: DaySummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
