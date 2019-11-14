import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
   setTimeout(() => {
    this.location.back();
}, 3500)
  }
; 
}
