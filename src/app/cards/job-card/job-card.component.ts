import { Component, OnInit } from '@angular/core';
import Job from 'src/app/models/Job';
import Card from 'src/app/cards/Card';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent extends Card implements OnInit {

  sampleId = 0;
  sampleTitle = 'Freelance Sloth Manager';
  sampleDescription = 'To ensure that Slothful practices are maintained and followed by the organization.';
  sampleApplicants = 14;
  sampleInterviews = 42;

  constructor() {
    super();
   }

  ngOnInit() {
  }

  getJob(job: Job): Job {
    // Gets job from Job-Service, passes params.
    return job;
  }

}
