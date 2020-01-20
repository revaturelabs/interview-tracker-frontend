import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import Interview from 'src/app/models/Interview';
import { InterviewService } from '../../interview-service/interview.service';
import { UserService } from 'src/app/user.service';
import User from 'src/app/models/User';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {

  private interviews: Interview[] = [];
  private interviewers: User[];

  constructor(private interviewService: InterviewService, private userServ: UserService) {}

  ngOnInit() {
    this.interviewService.retrieveAllInterviews().subscribe(interviewList => {
      this.interviews = interviewList;
    });

    this.userServ.retrieveAllUsers().subscribe(users => {
      this.interviewers = users;
    });
  }
}
