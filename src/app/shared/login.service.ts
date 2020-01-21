import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8765/users/login';

  constructor(private http: HttpClient) { }

  getUserInfo(user: User): Observable<User> {

    const params = new HttpParams()
    .set('username', user.username)
    .set('password', user.password);

    console.log('From Service: ' + user.username);
    console.log('From Service: ' + user.password);

    return this.http.post<User>(this.url, user);
  }
}
