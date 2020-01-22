
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import Job from '../models/Job';
import Interview from '../models/Interview';
import User from '../models/User';
import { UserService } from '../user.service';
import Profile from '../models/Profile';
import { ProfileService } from '../profile.service';
import { JobService } from '../Job-Service/job.service';
import Skill from '../models/Skill';
import { InterviewService } from '../interview-service/interview.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

const tabl =  document.getElementsByClassName('candidates_table');
@Component({
  selector: 'app-interview-create',
  templateUrl: './interview-create.component.html',
  styleUrls: ['./interview-create.component.scss']
})
export class InterviewCreateComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private userService: UserService, private profServ: ProfileService,
              private jobServ: JobService, private interviewServ: InterviewService, private mySnack: MatSnackBar) { }

   @Input() jb1: Job;
   @Input() users: User[] = [];
   @Input() profiles: Profile[] = [];
   @Input() date: Date;
    names: string[] = [];
    candidates: string[] = [];
    selectedNames: string[];
    selectedCandidate: Profile;
    jobSkills: Skill[];
    selectedDate: any;


ngOnInit() {

    document.title = 'Create an Interview';


    this.jb1  = this.jobServ.createdJob;
    this.jobSkills = this.jb1.skills;
    console.log(tabl);
    this.userService.retrieveAllUsers().subscribe(users => {
      console.log(users);
      users.forEach(user => {
            console.log(user.firstName);
            this.names.push(user.username);
          }
        );

      this.users = users;
      console.log(users);
    });
    if (this.jobServ.queuedInterviews.length === 0) {
    this.profServ.retrieveAllProfiles().subscribe(candidates => {
     this.profiles = candidates;
    });
  } else {
    this.profiles = this.jobServ.queuedInterviews;
  }
  }

  ngOnDestroy() {
    this.jobServ.queuedInterviews = [];
  }



    updateNamesList(selectionsForm) {
  console.log(selectionsForm);
  this.selectedNames = selectionsForm.value;
}

    changeForm(profile) {
  this.selectedCandidate = profile;

}

    saveinterview() {
  const selectedUsers: User[] = this.users.filter(user => {
    console.log(user);
    return this.selectedNames.includes(user.username); });
  console.log(selectedUsers);
  console.log('selected date is...');
  console.log(this.selectedDate);

  const newinterview: Interview = new Interview(-1 , this.selectedCandidate, this.selectedDate, false, this.jb1,  selectedUsers);
  console.log('sending...');
  this.interviewServ.saveInterview(newinterview).subscribe(data => {
    switch (data) {
      case true:
        this.mySnack.open('Interview sucessfully submitted.', 'success', {
          duration: 2000
        });
        break;
      case false:
        this.mySnack.open('Interview failed to create.', 'failure', {
          duration: 2000
        });
        break;
      default:
        break;

    }
  });


}

}
