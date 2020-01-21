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
  private page: number;
  private atEnd: boolean = false;

  constructor(private jobServ: JobServiceService) {}

  ngOnInit()
  {
    this.page = 0;
    this.jobServ.getAllJobAtPage(this.page).subscribe(data => {
      this.jobs = data;
      if(data.length < 10)
      {
        this.atEnd = true;
      }
    });
  }

  onSearchTermChanged(e)
  {
    console.log('inside of job.component, value is: ', e);
  }

  nextPage()
  {
    this.page++;
    this.jobServ.getAllJobAtPage(this.page).subscribe(data => {
      this.jobs = this.jobs.concat(data);
      if(data.length < 10)
      {
        this.atEnd = true;
      }
    });
  }
}
