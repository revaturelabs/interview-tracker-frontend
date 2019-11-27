import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../services/navbarserv.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-profiles',
  templateUrl: './view-profiles.component.html',
  styleUrls: ['./view-profiles.component.scss']
})
export class ViewProfilesComponent implements OnInit {
profile: any;

  constructor(public nav: NavbarservService, private http: HttpClient) { }

  ngOnInit() {
    this.nav.show();
    this.http.get(environment.main_url + 'profiles/allProfiles').toPromise().then(r => {
      this.profile = r;
    });
  }

   filterS(fname:string, lname:string, searchName:string):boolean {
    if(typeof searchName == "undefined"){
      searchName="";
    }
    return (fname+lname+'').toLowerCase().includes((searchName+'').toLowerCase())
  }

}
