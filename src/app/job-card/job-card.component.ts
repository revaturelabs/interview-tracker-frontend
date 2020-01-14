import { Component, OnInit } from '@angular/core';
import Job from '../models/Job';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getJob(job: Job) {
    // Gets job from Job-Service, passes params.
  }

}
