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

  ngOnInit() {
  }

  login(form: NgForm){
    this.http.post("", {
      username: form.value.username,
      password: form.value.password
    })
    .toPromise().then((r: {username: string; password: string})=> {
      console.log(r);
    }).catch(e=>console.log(e));
  }

}
