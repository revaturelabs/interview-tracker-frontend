import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../../services/navbarserv.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {

  constructor( public nav: NavbarservService) { }

  ngOnInit() {
    this.nav.show();
  }

}
