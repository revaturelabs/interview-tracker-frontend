import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import Interview from 'src/app/models/Interview';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {
  interviewers: string[];

  interviews: Interview[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.interviewers = this.httpService.interviewers;
    this.httpService.getJSON('assets/seed/interviews.json').subscribe(interviewList => this.interviews = interviewList);
  }
}
