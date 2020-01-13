import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {
  activated = false;

  constructor() { }

  ngOnInit() {
  }

  activate() {
    this.activated = !this.activated;
  }

}
