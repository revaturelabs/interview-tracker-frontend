import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  email: string;
  ngOnInit() {
  }

  login(form: NgForm){
    this.email=form.value.email;
    this.http.post("", {
      email: form.value.email,
      password: form.value.password
    })
    .toPromise().then((r: {email: string; password: string})=> {
      console.log(r);
    }).catch(e=>console.log(e));
  }

}

export class LoginModule { }
