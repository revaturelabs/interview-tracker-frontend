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


  constructor(private http:HttpClient, private activatedRoute: ActivatedRoute,
    private router: Router) { }
    
    ngOnInit() {
    }
    submission(form: NgForm) {
    // @Author: Brittanny
    //  This method takes the username and the password and compares the values inside the database, as it finds and
    //  verifies the user info, it will sign in the user and redirect them to the home, that being the "Hub."
    this.http.post("localhost:4200", {
      username: form.value.username,
      password: form.value.password,
    })
    .toPromise()
    .then((r: {username: string;password: string}) => {
      console.log(r);
      sessionStorage.setItem("user", JSON.stringify(r));
      if(r!=null){
       this.onLogInButtonClick();
      }
    })
    .catch(e => console.log(e));
  }
  onLogInButtonClick(): void{
  this.router.navigateByUrl('/hub')
  
  }

}
