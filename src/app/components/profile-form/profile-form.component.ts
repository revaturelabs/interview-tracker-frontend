import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../../services/navbarserv.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  constructor( public nav: NavbarservService ) { }

  ngOnInit() {
    this.nav.show();
  }

}
