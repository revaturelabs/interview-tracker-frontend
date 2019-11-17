import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {
    this._authService.logout();
    this.router.navigate(['login']);
  }
logout(){
  this._authService.logout();
}
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/AimeeBranch
