import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../services/navbarserv.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-interviews',
  templateUrl: './view-interviews.component.html',
  styleUrls: ['./view-interviews.component.scss']
})
export class ViewInterviewsComponent implements OnInit {
interview: any;
  constructor(public nav: NavbarservService, private http: HttpClient) { }

  ngOnInit() {
    this.nav.show();
    this.http.get(environment.main_url + 'interviews/allInterviews').toPromise().then(
      r => {
      this.interview = r;
    });
  }

}
