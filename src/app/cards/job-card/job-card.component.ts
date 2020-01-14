import { Component, OnInit } from '@angular/core';
import Job from 'src/app/models/Job';
import Card from 'src/app/cards/Card';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent extends Card implements OnInit {

  sampleTitle = 'Freelance Sloth Manager';
  sampleDescription = 'To ensure that Slothful practices are maintained and followed by the organization.';


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
