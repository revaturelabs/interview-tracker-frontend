import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../services/navbarserv.service';

@Component({
  selector: 'app-view-interviews',
  templateUrl: './view-interviews.component.html',
  styleUrls: ['./view-interviews.component.scss']
})
export class ViewInterviewsComponent implements OnInit {

  constructor(public nav: NavbarservService ) { }

  ngOnInit() {
    this.nav.show();
  }

}
