import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import User from '../models/User';

@Component({
  selector: 'app-interviewer-list',
  templateUrl: './interviewer-list.component.html',
  styleUrls: ['./interviewer-list.component.scss']
})
export class InterviewerListComponent implements OnInit 
{
  private selections = new FormControl();
  @Input() selectionList: User[];
  private title = "Interviewers";

  @Output() selectionChange = new EventEmitter();
  
  constructor() { }

  ngOnInit() { }

  selectionChanged()
  {
    this.selectionChange.emit(this.selections.value);
  }

}
