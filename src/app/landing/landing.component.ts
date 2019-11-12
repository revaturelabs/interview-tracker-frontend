import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
      // do init at here for current route.

      setTimeout(() => {
        this.router.navigate(['log-in']);
    }, 2000);  //5s
  }

}
