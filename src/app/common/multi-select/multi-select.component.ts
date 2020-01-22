import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

 selections = new FormControl();
@Output() emitSelections = new EventEmitter<any>();
  @Input() selectionList: string[];
  @Input() title: string;



  constructor() {}

  ngOnInit() {
  }

  sendSelections() {
    this.emitSelections.emit(this.selections);
  }
}
