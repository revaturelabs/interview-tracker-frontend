import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { Location } from '@angular/common';
>>>>>>> origin/ramseslt

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

<<<<<<< HEAD
  constructor(private router: Router) { }

  ngOnInit() {
      // do init at here for current route.

      setTimeout(() => {
        this.router.navigate(['log-in']);
    }, 2000);  //5s
  }

=======
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
   setTimeout(() => {
    this.location.back();
}, 3500)
  }
; 
>>>>>>> origin/ramseslt
}
