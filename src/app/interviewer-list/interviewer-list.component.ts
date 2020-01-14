import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-interviewer-list',
  templateUrl: './interviewer-list.component.html',
  styleUrls: ['./interviewer-list.component.scss']
})
export class InterviewerListComponent implements OnInit 
{
  selections = new FormControl();
  @Input() selectionList: string[];
  @Input() title: string;

  @Output() selectionChange = new EventEmitter();
  
  constructor() { }

  ngOnInit() 
  {

  }

  selectionChanged()
  {
    this.selectionChange.emit(this.selections.value);
  }

}
