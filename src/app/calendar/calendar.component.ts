import { Component, OnInit, Input, OnChanges } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import Interview from '../models/Interview';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnChanges {
  calendarPlugins = [dayGridPlugin]; // important!
  @Input() interviews: Interview[] = [];
  allDays: Day[] = [];

  headerOptions = {
    left: 'prev',
    center: 'title',
    right: 'next'
  };

  constructor() {}

  ngOnChanges(changes) {
    if (
      changes.interviews.currentValue &&
      changes.interviews.currentValue.length > 0
    ) {
      this.populate(changes.interviews.currentValue);
    }
  }

  ngOnInit() {
    // this.populate();
  }

  populate(interviews) {
    this.allDays = [];
    let exists: Day;
    let interviewDate: string;
    for (const interview of interviews) {
      interviewDate = new Date(interview.date).toISOString();
      console.log('date to string', interviewDate);
      exists = this.allDays.find(
        day => day.date === interviewDate
      )
      if (exists) {
        exists.title++;
        exists.interviews.push(interview);
      } else {
        this.allDays.push(
          new Day(1, interviewDate, [interview])
        );
      }
    }
    console.log(this.allDays)
  }
}

class Day {
  constructor(
    public title: number,
    public date: string,
    public interviews: Interview[]
  ) {}
}
