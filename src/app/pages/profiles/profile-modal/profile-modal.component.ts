import { Component, OnInit } from '@angular/core';
import { InterviewService } from 'src/app/interview-service/interview.service';
import Profile from 'src/app/models/Profile';
import Interview from 'src/app/models/Interview';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent implements OnInit {

  constructor(interviewService: InterviewService) { }

  private profile: Profile;
  private interviews: Interview[];

  ngOnInit() {
  }

}
