import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin]; // important!

  headerOptions = {
    left: 'prev',
    center: 'title',
    right: 'next'
  };

  events = [
    { title: '1', date: '2020-01-12' },
    { title: '2', date: '2020-01-13' }
  ];

  constructor() {}

  ngOnInit() {}
}
