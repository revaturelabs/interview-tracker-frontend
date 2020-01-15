import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import Interview from 'src/app/models/Interview';
import { InterviewService } from '../../interview-service/interview.service';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {
  interviewers: string[];

  interviews: Interview[] = [];

  constructor(private httpService: HttpService, private interviewService: InterviewService) {}

  ngOnInit() {
    this.interviewers = this.httpService.interviewers;
    this.interviewService.retrieveAllInterviews().subscribe(interviewList => this.interviews = interviewList);
    // Dummy Data v
    // this.httpService.getJSON('assets/seed/interviews.json').subscribe(interviewList => this.interviews = interviewList);
  }
}
