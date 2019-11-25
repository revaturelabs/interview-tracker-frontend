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
  skill: any;
  skills: any[] = [];



  constructor( public nav: NavbarservService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.nav.show();

    this.http.get(environment.main_url + 'skills/allSkills').toPromise().then(r => {
      this.skill = r;
    });
  }

  submission(form: NgForm) {
    this.http.post(environment.main_url + 'profiles/saveProfile', {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      skills: this.skills,
      description: form.value.description
    })
    .toPromise()
    .then((r: {firstName: string; lastName: string; skills: any; description: string}) => {
      console.log(r);
    })
    .catch(e => console.log(e));
  }
    getCheckboxes(event) {
    if (event.checked === true) {
    this.skills.push({id : event.source.id, title: event.source.name});
    }
    if (event.checked === false) {
      this.skills.splice(this.skills.indexOf({id: event.source.id}) - 1, 1);
    }
    }
}
