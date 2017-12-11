import { Injectable } from '@angular/core';
import { Activity } from './activity';
import { ActivityData } from './activity-data';

@Injectable()
export class ActivityService {

  constructor() { }
	
	getDayData(day: string): Observable<Activity>[] {
		return ActivityData.find(a => a.day === day);	
	}
	getDays(): any {
		return ActivityData.map(a => a.day);
	}
}
