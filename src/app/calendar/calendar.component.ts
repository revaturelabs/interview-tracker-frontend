import { Component, OnInit, Input } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import Interview from '../models/Interview';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin]; // important!
  @Input() interviews: Interview[];
  allDays: any[] = [];

  headerOptions = {
    left: 'prev',
    center: 'title',
    right: 'next'
  };

  constructor() {}

  ngOnInit() {
    let exists: Day[];
    for (const interview of this.interviews) {
      exists = this.allDays.filter(
        day => day.date === interview.date.toISOString()
      );
      if (exists.length > 0) {
        exists[0].interviews.push(interview);
      } else {
        this.allDays.push(
          new Day(1, interview.date.toISOString(), [interview])
        );
      }
    }
  }
}

class Day {
  constructor(
    public title: number,
    public date: string,
    public interviews: Interview[]
  ) {}
}
