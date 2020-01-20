import { Component, OnInit, Input } from '@angular/core';
import Job from '../models/Job';
import Interview from '../models/Interview';

const tabl =  document.getElementsByClassName('candidates_table');
@Component({
  selector: 'app-interview-create',
  templateUrl: './interview-create.component.html',
  styleUrls: ['./interview-create.component.scss']
})
export class InterviewCreateComponent implements OnInit {
  constructor() { }
   @Input() jb1: Job;
  ngOnInit() {
    document.title = 'Create an Interview';
    if (Job) {
    this.jb1 = new  Job(-1, 'Sr. Yeeter', 'High level yeeter', 'Yeetville', false, null);
    }
    console.log(tabl);
  }

}
