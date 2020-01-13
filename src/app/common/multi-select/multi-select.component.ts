import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  selections = new FormControl();
  @Input() selectionList: string[];
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
