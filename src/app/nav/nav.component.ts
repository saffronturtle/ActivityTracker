import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
days: string[];
  constructor(private activityService: ActivityService) { }

  ngOnInit() {
		this.days = this.activityService.getDays();
  }

}
