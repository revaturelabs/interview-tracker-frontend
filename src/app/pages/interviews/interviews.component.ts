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
  private filteredInterviews: Interview[] = [];
  private interviewers: User[];
  private filteredInterviewers: User[];
  private names: string[] = ['All'];
  private added: boolean;

  constructor(private interviewService: InterviewService, private userServ: UserService) {}

  ngOnInit() {
    this.interviewService.retrieveAllInterviews().subscribe(interviewList => {
      this.interviews = interviewList;
      this.filteredInterviews = this.interviews;
    });

    this.userServ.retrieveAllUsers().subscribe(users => {
      this.interviewers = users;
      this.filteredInterviewers = this.interviewers;
    });
  }

  selectionChange(interviewers: User[]) {
    this.filteredInterviewers = interviewers;
    this.filteredInterviews = [];
    this.names = [];

    interviewers.forEach(user => {
      this.names.push(user.firstName);
    });
    if (this.names.length === 0) {
      this.names.push('All');
    }
    this.interviews.forEach(interview => {
      this.added = false;
      interview.users.forEach(user => {
        this.filteredInterviewers.forEach(interviewer => {
          if (interviewer.firstName === user.firstName && !this.added) {
            this.filteredInterviews.push(interview);
            this.added = true;
          }
        });
      });
    });
    if (this.filteredInterviewers.length === 0) {
      this.filteredInterviews = this.interviews;
    }
  }
}
