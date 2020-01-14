import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/Job-Service/job-service.service';
import Job from 'src/app/models/Job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit 
{
  private jobs: Job[];

  constructor(private jobServ: JobServiceService) {}

  ngOnInit() {
    this.retrieveJobPage(0);
  }

  onSearchTermChanged(e) {
    console.log('inside of job.component, value is: ', e);
  }

  retrieveJobPage(page: number)
  {
    this.jobServ.getAllJobAtPage(page).subscribe(data => {
      this.jobs.concat(data);
    })
  }
}
