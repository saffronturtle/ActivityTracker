import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { ImageCategoryPipe } from '../image-category.pipe';

@Component({
  selector: 'app-day-summary',
  templateUrl: './day-summary.component.html',
  styleUrls: ['./day-summary.component.scss']
})
export class DaySummaryComponent implements OnInit {
	dayData: Activity[];
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
			params => this.dayData = this.activityService.getDayData(params.get('day'))
		);
	}
	
}
