import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { NavbarComponent } from '../navbar/navbar.component';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registration = false;
  registration = false;


  constructor(private router: Router, private http: HttpClient)
   { }

  ngOnInit() {
  }
  
  failedLogin = false;
  performLogin(form:NgForm){
    this.http.post(environment.mainUrl + "user/processLogin.application", {
      email: form.value.email,
      password: form.value.pass
    }).toPromise(.then())
  }
  failedLogin = false;
  performLogin(form:NgForm) {
    this.http.post(environment.mainUrl + "user/processLogin.application", {
      email: form.value.email,
      password: form.value.pass
    }).toPromise().then(u => {
      if (u != null) {
        sessionStorage.setItem('user', JSON.stringify(u));
        this.router.navigate(['/home']);
      } else {
        this.failedLogin = true;
      }
    });
  }
  
  performRegister(form:NgForm) {
    if (form.value.pass === form.value.cPass) {
      this.http.post(environment.mainUrl + "user/putIn.application", {
        email: form.value.email,
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        password: form.value.pass,
              }).toPromise().then(u => {this.registration = false; console.log(u)});
    } else {
      this.registerAlert = true;
    }
  }

  toggleRegister() {
    this.registration = !this.registration;
  }



}
