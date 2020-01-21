
import { Component, OnInit, Input } from '@angular/core';
import Job from '../models/Job';
import Interview from '../models/Interview';
import User from '../models/User';
import { UserService } from '../user.service';
import Profile from '../models/Profile';
import { ProfileService } from '../profile.service';
import { JobServiceService } from '../Job-Service/job-service.service';
import Skill from '../models/Skill';
import { InterviewService } from '../interview-service/interview.service';
import { Router } from '@angular/router';

const tabl =  document.getElementsByClassName('candidates_table');
@Component({
  selector: 'app-interview-create',
  templateUrl: './interview-create.component.html',
  styleUrls: ['./interview-create.component.scss']
})
export class InterviewCreateComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private profServ: ProfileService, private jobServ: JobServiceService, private interviewServ: InterviewService) { }

   @Input() jb1: Job;
   @Input() users: User[] = [];
   @Input() profiles: Profile[] = [];
    names: string[] = [];
    candidates: string[] = [];
    selectedNames: string[];
    selectedCandidate: Profile;
    jobSkills: Skill[];


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
    if(this.jobServ.queuedInterviews.length == 0){
    this.profServ.retrieveAllProfiles().subscribe(candidates => {
     this.profiles = candidates;
    });
  }
  else{
    this.profiles = this.jobServ.queuedInterviews;
  }
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
    return this.selectedNames.includes(user.username)});
  console.log(selectedUsers);
  const newinterview: Interview = new Interview(-1 , this.selectedCandidate, new Date(), false, this.jb1,  selectedUsers);
  console.log("sending...");
  this.interviewServ.saveInterview(newinterview).subscribe(() => this.router.navigate(['/interviews']));
  

}



}
