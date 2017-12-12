import { Injectable } from '@angular/core';
import { Activity } from './activity';
import { ActivityData } from './activity-data';

@Injectable()
export class ActivityService {
	data: Activity[];

  constructor() { 
	this.data = ActivityData;
	}	
	getDayData(day: string): any {
		return this.data.filter(a => a.day === day);	
	}
	getDays(): any {
		return (this.data.map(a => a.day)).filter((x,i,a) => x && a.indexOf(x) === i);
	}
	addActivity(activity: Activity) {
		this.data.push(activity);
	}
		
}
