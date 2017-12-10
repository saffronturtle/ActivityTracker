import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityData } from '../activity-data';
@Component({
  selector: 'app-day-summary',
  templateUrl: './day-summary.component.html',
  styleUrls: ['./day-summary.component.scss']
})
export class DaySummaryComponent implements OnInit {
	constructor () {
}
  constructor(day: string) { 
	dayData = getDayData(day);
}

  ngOnInit() {
  }

	private getDayData(day: string): any {
		return ActivityData.find(a => a.day === day);
	}
}
