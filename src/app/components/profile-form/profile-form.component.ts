import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../../services/navbarserv.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgForm, FormGroup, FormArray} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  skillArray = new FormArray({
});
  skill: any;



  constructor( public nav: NavbarservService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.nav.show();

    this.http.get(environment.main_url + 'skills/allSkills').toPromise().then(r => {
      this.skill = r;
    });
  }

 checkedskills() {
    this.skill.foreach(function(s) {
      if (s.title) {
        this.skillArray.add({id: s.id});
      }
    });
 }

  submission(form: NgForm) {
    console.log(form.value.firstName);
    console.log(form.value.lastName);
    console.log(form.value.skills);
    /*
    this.http.post(environment.main_url + 'profile', {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      skills: this.skillArray,
      description: form.value.description
    })
    .toPromise().then((r: {firstName: string; lastName: string; description: string; skills: any; }) => {
      console.log(r);
    })
    .catch(e => console.log(e));
    */
  }


}
