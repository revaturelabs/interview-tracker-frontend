import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

 @Output() selections = new FormControl();

  @Input() selectionList: string[];
  @Input() title: string;



  constructor() {}

  ngOnInit() {
  }
}
