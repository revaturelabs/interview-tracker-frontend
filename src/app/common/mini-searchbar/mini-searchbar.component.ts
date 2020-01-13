import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mini-searchbar',
  templateUrl: './mini-searchbar.component.html',
  styleUrls: ['./mini-searchbar.component.scss']
})
export class MiniSearchbarComponent implements OnInit {
  label = 'Search ';
  value = '';
  @Output() searchTermChanged: EventEmitter<string> = new EventEmitter();

  termChanged() {
    this.searchTermChanged.emit(this.value);
  }

  constructor() {}

  ngOnInit() {
    this.label += window.location.pathname.slice(1);
  }
}
