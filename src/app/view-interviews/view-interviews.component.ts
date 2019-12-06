import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../services/navbarserv.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InterviewService } from '../services/Interview/interview.service';
import { Interview } from '../models/interview';

@Component({
  selector: 'app-view-interviews',
  templateUrl: './view-interviews.component.html',
  styleUrls: ['./view-interviews.component.scss']
})
export class ViewInterviewsComponent implements OnInit {
interviews: Interview[];
  constructor(public nav: NavbarservService, private http: HttpClient, private interviewService: InterviewService) { }

  ngOnInit() {
    this.nav.show();
    this.getAllInterviews();
  }
  getAllInterviews() {
    this.interviewService.getAllInterviews().subscribe(i => {
      console.log(i);
      this.interviews = i;
    }, err => console.log(err))
  }

}
