import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _authService: any;
  logout() {
    this._authService.logout();;
  }

  private _loginUrl = "http://localhost:4200/login";

  constructor(private http: HttpClient,
              private _router: Router) { }
}