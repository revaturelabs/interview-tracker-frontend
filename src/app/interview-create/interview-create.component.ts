
import { Component, OnInit, Input } from '@angular/core';
import Job from '../models/Job';
import Interview from '../models/Interview';
import User from '../models/User';
import { UserService } from '../user.service';

const tabl =  document.getElementsByClassName('candidates_table');
@Component({
  selector: 'app-interview-create',
  templateUrl: './interview-create.component.html',
  styleUrls: ['./interview-create.component.scss']
})
export class InterviewCreateComponent implements OnInit {

  constructor(private userService: UserService) { }

   @Input() jb1: Job;
   @Input() users: User[] = [];
    names: string[] = [];
    selectedNames: string[];




ngOnInit() {
    document.title = 'Create an Interview';
    if (Job) {
    this.jb1 = new  Job(-1, 'Sr. Yeeter', 'High level yeeter', 'Yeetville', false, null);
    }
    console.log(tabl);
    this.userService.retrieveAllUsers().subscribe(users => {
          this.users.forEach(user => console.log(user.username));

      this.users=users;
      console.log(users);
    });

  }



updateNamesList(selectionsForm) {
  console.log(selectionsForm);
  this.selectedNames=selectionsForm.value;
}

}
