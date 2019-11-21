import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../services/navbarserv.service';

@Component({
  selector: 'app-view-profiles',
  templateUrl: './view-profiles.component.html',
  styleUrls: ['./view-profiles.component.scss']
})
export class ViewProfilesComponent implements OnInit {

  constructor(public nav: NavbarservService ) { }

  ngOnInit() {
    this.nav.show();
  }

}
