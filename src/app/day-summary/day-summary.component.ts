import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-day-summary',
  templateUrl: './day-summary.component.html',
  styleUrls: ['./day-summary.component.scss']
})
export class DaySummaryComponent implements OnInit {
	dayData: Activity[];
	day: string;
	constructor (
		private route: ActivatedRoute,
		private activityService: ActivityService,
		private location: Location) {
	}

  ngOnInit() {
		this.getDayData();
  }
	

	getDayData(): void {
		this.route.paramMap.subscribe(
			params => this.day = params.get('day')
		);
		this.dayData = this.activityService.getDayData(this.day);
	}
	
}
