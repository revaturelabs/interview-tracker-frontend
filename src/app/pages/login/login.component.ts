import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import User from 'src/app/models/User';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  validatedUser: User;
  username = '';
  password = '';
  

  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    document.title = 'Interview Tracker: Login';
    this.user = new User(null, null, null, null, null);
  }

  login() {
    console.log(`Username: ${this.username}`);
    console.log(`Password: ${this.password}`);

    this.user.username = this.username;
    this.user.password = this.password;

    this.loginService.getUserInfo(this.user).subscribe(data => {
      this.validatedUser = data;
      console.log(this.validatedUser);
      if(data){
        this.router.navigate(['/jobs']);
      } else {
        this.snackBar.open('Wrong username or password',
          'Dismiss', {duration: 5000, verticalPosition: 'top'});
      }
    });



  }

}
