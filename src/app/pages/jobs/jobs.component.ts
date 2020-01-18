import { Component, OnInit, HostListener } from '@angular/core';
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
  private page: number = 0;

  constructor(private jobServ: JobServiceService) {}

  ngOnInit()
  {
    this.retrieveJobPage(this.page);
  }

  onSearchTermChanged(e)
  {
    console.log('inside of job.component, value is: ', e);
  }

  retrieveJobPage(page: number)
  {
    this.jobServ.getAllJobAtPage(page).subscribe(data => {
      this.jobs = data;
    });
  }

  nextPage()
  {
    this.page++;
    this.jobServ.getAllJobAtPage(this.page).subscribe(data => {
      this.jobs = this.jobs.concat(data);
    });
  }
}
