import { Component, OnInit } from '@angular/core';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
@Component({
  selector: 'app-activity-editor',
  templateUrl: './activity-editor.component.html',
  styleUrls: ['./activity-editor.component.scss']
})
export class ActivityEditorComponent implements OnInit {
	model = new Activity();
	constructor(private activityService: ActivityService) { }
  ngOnInit() {
  }
	
	onSubmit() {
		this.activityService.addActivity(this.model);
	}
}
