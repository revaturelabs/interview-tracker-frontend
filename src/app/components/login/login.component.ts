
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarservService } from '../../services/navbarserv.service';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/User/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router, private nav: NavbarservService, private userService: UserService) { }

  ngOnInit() {
    this.nav.hide();
  }

  submission(form: NgForm) {
    console.log("into submission");
    this.userService.login(new User(form.value.username, form.value.password)).subscribe(
      r => {
      console.log(r);
      sessionStorage.setItem('user', r.username);
      if (r != null) {
       this.onLogInButtonClick();
      }
    }, err => {
      console.log(err)
    });

  }
  onLogInButtonClick(): void {
    this.router.navigate(['hub']);
  }
}





