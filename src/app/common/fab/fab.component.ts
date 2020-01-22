import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {

  activated = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  activate(): void {
    this.activated = !this.activated;
  }

  clickCreateJob(): void {
    this.router.navigate(['create-jobs']);
  }

  clickCreateProfile(): void {
    this.router.navigate(['profile-create']);
  }
}
