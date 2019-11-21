import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../../services/navbarserv.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  skill: any;

  constructor( public nav: NavbarservService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.nav.show();

    this.http.get(environment.main_url + 'skills/allskills').toPromise().then(r => {
      this.skill = r;
    });
  }

  submission(form: NgForm) {
    this.http.post(environment.main_url + 'profile', {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      description: form.value.description
    })
    .toPromise().then((r: {firstName: string; lastName: string; description: string;}) => {
      console.log(r);
    })
    .catch(e => console.log(e));
  }


}
