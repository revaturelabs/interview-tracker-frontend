
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarservService } from '../../services/navbarserv.service';


import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router, private nav: NavbarservService) { }

  ngOnInit() {
    this.nav.hide();
  }

  submission(form: NgForm) {
<<<<<<< HEAD

    this.router.navigateByUrl('/hub');
=======
    this.router.navigate(['hub'])
    
>>>>>>> 79bc987974f837a6ca04c2c9a803763e150d6199
    this.http.post(environment.login_url, {

      username: form.value.username,
      password: form.value.password,
    })
    .toPromise()
    .then((r: {username: string; password: string}) => {
      console.log(r);
      sessionStorage.setItem('user', JSON.stringify(r));
      if (r != null) {
       this.onLogInButtonClick();
      }
    })
    .catch(e => console.log(e));
  }
  onLogInButtonClick(): void {
  }
}





