import { Injectable } from '@angular/core';
import { Activity } from './activity';
import { ActivityData } from './activity-data';

@Injectable()
export class ActivityService {

  constructor() { }
	
	getDayData(day: string): any {
		return ActivityData.filter(a => a.day === day);	
	}
	getDays(): any {
		return (ActivityData.map(a => a.day)).filter((x,i,a) => x && a.indexOf(x) === i);
	}
}
