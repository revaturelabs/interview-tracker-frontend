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
interviews: any;
opinions: any;
name: string;

  constructor(public nav: NavbarservService, private http: HttpClient) { }

  ngOnInit() {
    this.opinions = 'byname';
    this.nav.show();
    this.http.get(environment.main_url + 'profiles/allProfiles').toPromise().then(r => {
      this.profile = r;
    });

    this.http.get(environment.main_url + 'interviews/allInterviews').toPromise().then(r => {
      console.log(r);
      this.interviews = r;
    }).catch(e => console.log(e));
  }
   filterS(obj: object, searchName: string): boolean {
    if (typeof searchName === 'undefined') {
      searchName = '';
    }
    let allskills = '';
    // @ts-ignore
    const fname: string = obj.firstName; const lname: string = obj.lastName; const skills: any = obj.skills;
    for (const x of skills) {
      allskills += x.title;
    }
    console.log(allskills.toLowerCase());
    let outpt = false;
    if (this.opinions === 'byname') {
      outpt = (fname + lname).toLowerCase().includes((searchName).toLowerCase());
    } else {
      outpt = allskills.toLowerCase().includes((searchName).toLowerCase());
    }
    return outpt;
  }

}
