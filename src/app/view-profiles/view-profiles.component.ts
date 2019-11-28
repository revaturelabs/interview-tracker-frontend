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
opinions:any;

  constructor(public nav: NavbarservService, private http: HttpClient) { }

  ngOnInit() {
    this.opinions="byname";
    this.nav.show();
    this.http.get(environment.main_url + 'profiles/allProfiles').toPromise().then(r => {
      this.profile = r;
    });
  }
   filterS(obj:object, searchName:string):boolean {
    if(typeof searchName == "undefined"){
      searchName="";
    }    
    let allskills:string="";
    //@ts-ignore    
    let fname:string=obj.firstName;let lname:string=obj.lastName; let skills:any=obj.skills   
    for(let x of skills){      
      allskills += x.title;
    }
    console.log(allskills.toLowerCase());
    let outpt:boolean=false;
    if(this.opinions=="byname"){
      outpt=(fname+lname).toLowerCase().includes((searchName).toLowerCase());
    }else{
      outpt=allskills.toLowerCase().includes((searchName).toLowerCase());
    }
    return outpt
  }

}
