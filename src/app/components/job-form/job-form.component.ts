import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { NavbarservService } from '../../services/navbarserv.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {

  constructor( public nav: NavbarservService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.nav.show();
  }
  submission(form: NgForm) {
    this.http.post('http://localhost:8765/interview-service/jobs/saveJob', {
      title: form.value.title,
      description: form.value.description,
    })
    .toPromise()
    .then((r: {title: string; description: string}) => {
      console.log(r);
    })
    .catch(e => console.log(e));
  }
  onLogInButtonClick(): void {
    this.router.navigate(['hub']);
  }







}
