import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  @ViewChild('nav', { static: false }) nav;

  barPosition = '';

  ngAfterViewInit(): void {
    this.decideToHideNav(window.location.pathname);
  }

  decideToHideNav(url) {
    if (url === '/login' || url === '/') {
      this.nav.nativeElement.style.display = 'none';
    } else {
      this.nav.nativeElement.style.display = 'flex';
    }
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.decideToHideNav(event.url);
        switch (event.url) {
          case '/jobs':
            document.title = 'Interview Tracker: Jobs';
            this.barPosition = 'bar_start';
            break;
          case '/profiles':
            this.barPosition = 'bar_center';
            document.title = 'Interview Tracker: Profiles';
            break;
          case '/interviews':
            this.barPosition = 'bar_end';
            document.title = 'Interview Tracker: Interviews';
            break;
        }
      }
    });
  }
}
