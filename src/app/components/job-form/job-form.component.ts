import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { NavbarservService } from '../../services/navbarserv.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})


export class JobFormComponent implements OnInit {
  form: FormGroup;
  skill: any;

  constructor( public nav: NavbarservService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.nav.show();

    this.http.get(environment.main_url + 'skills/allskills').toPromise().then(r => {
      this.skill = r;
    });
  }
  // submission(form: NgForm) {
  //   this.http.post(environment.main_url + 'jobs/saveJob', {
  //     title: form.value.title,
  //     description: form.value.description,
  //     skills: [],
  //   })
  //   .toPromise()
  //   .then((r: {title: string; description: string; skills: any}) => {
  //     console.log(r);
  //   })
  //   .catch(e => console.log(e));
  // }
  // onLogInButtonClick(): void {
  //   this.router.navigate(['hub']);
  // }

}
