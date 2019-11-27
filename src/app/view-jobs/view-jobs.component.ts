import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../services/navbarserv.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.scss']
})
export class ViewJobsComponent implements OnInit {
  job: any;
  slider: string;
  id: number;
  constructor(public nav: NavbarservService, private http: HttpClient) { }

  ngOnInit() {
    this.nav.show();
    this.http.get(environment.main_url + 'jobs/allJobs').toPromise().then(r => {
      this.job = r;
      this.slider = 'Job is open';
  });
}
sliderChange(event) {
  if (event.checked === true) {
  this.slider = 'Job is filled';
  this.id = event.source.id;
  console.log(this.id);
  }
  if (event.checked === false) {
    this.slider = 'Job is open';
  }
}

submission(form: NgForm) {
  console.log(form.value);
  this.http.patch(environment.main_url + 'jobs/updateJob', {
    id: this.id
  })
  .toPromise()
  .then((r: {filled: boolean}) => {
    console.log(r);
    location.reload();
  })
  .catch(e => console.log(e));
}
}
