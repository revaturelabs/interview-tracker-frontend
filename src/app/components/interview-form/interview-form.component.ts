import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../../services/navbarserv.service';

@Component({
  selector: 'app-interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.scss']
})
export class InterviewFormComponent implements OnInit {

  constructor( public nav: NavbarservService) { }

  ngOnInit() {
    this.nav.show();
  }

}
