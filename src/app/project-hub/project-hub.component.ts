import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../services/navbarserv.service';

@Component({
  selector: 'app-project-hub',
  templateUrl: './project-hub.component.html',
  styleUrls: ['./project-hub.component.scss']
})
export class ProjectHubComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor( public nav: NavbarservService ) { }

  ngOnInit() {
    if (!localStorage.getItem('loa')) { 
      localStorage.setItem('loa', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('loa') 
    }
    this.nav.show();
  }

  toggle() {
    this.show = !this.show;
  }

}
