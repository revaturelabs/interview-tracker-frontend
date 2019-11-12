import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private http:HttpClient, private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }

  submission(form: NgForm) {
    this.http.post("localhost:4200", {
      email: form.value.email,
      password: form.value.password,
    })
    .toPromise()
    .then((r: {email: string;password: string}) => {
      console.log(r);
      sessionStorage.setItem("user", JSON.stringify(r));
      if(r!=null){
        this.onLogInButtonClick();
      }
    })
    .catch(e => console.log(e));
  }
  onLogInButtonClick(): void{}

}
