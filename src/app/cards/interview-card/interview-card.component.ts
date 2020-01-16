import { Component, OnInit, Input } from '@angular/core';
import Card from '../Card';
import Interview from '../../models/Interview';
import User from 'src/app/models/User';

@Component({
  selector: 'app-interview-card',
  templateUrl: './interview-card.component.html',
  styleUrls: ['./interview-card.component.scss']
})
export class InterviewCardComponent extends Card implements OnInit {
  // tslint:disable-next-line: max-line-length
  sampleDescription = 'Ben Solo has a lot of potential but has dark side tendencies. Dont give him a lightsabre. With his parents being Lea Organa and Han Solo, Kylo is likely to be force sensetive and a scoundrel.';

  @Input() interview: Interview;

  title: string;
  completed = 'pending';
  date: Date;
  interviewee: string;
  interviewers: string[] = [];
  comments: string;

  constructor() {
    super();
  }

  ngOnInit() {
    this.title = this.interview.interviewJobId.title;
    this.date = this.interview.interviewDate;
    this.interviewee = this.interview.interviewProfileId.profileFirstName.concat(' ', this.interview.interviewProfileId.profileLastName);
    this.interview.usersIdList.forEach(element => {this.interviewers.push(element.userFirstName); });
    // Comments are sample text currently
    this.comments = this.sampleDescription;
    if (this.interview.interviewCompleted) {
      this.completed = 'completed';
    }
  }

}
