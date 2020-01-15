import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {

  activated = false;
  returnedContent = '';

  constructor() { }

  ngOnInit() {
  }

  activate(): void {
    this.activated = !this.activated;
  }

  clickCreateJob(): void {
    this.returnedContent = '<app-create-jobs />';
  }

  clickCreateProfile(): void {
    this.returnedContent = '<app-profile-create />';
  }
}
