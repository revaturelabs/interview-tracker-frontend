import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../services/navbarserv.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.scss']
})
export class ViewJobsComponent implements OnInit {
  job: any;
  slider: string;
  constructor(public nav: NavbarservService, private http: HttpClient) { }

  ngOnInit() {
    this.nav.show();
    this.http.get(environment.main_url + 'jobs/allJobs').toPromise().then(r => {
      this.job = r;
  });
}
sliderChange(event) {
  if (event.checked === true) {
  this.slider = 'Job is filled';
  }
  if (event.checked === false) {
    this.slider = 'Job is open';
  }
}
}
