import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from '../models/User';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8765/user/login';

  constructor(private http: HttpClient) { }

  getUserInfo(user: User): Observable<User> {

    const params = new HttpParams()
    .set('username', user.username)
    .set('password', user.password);

    return this.http.post<User>(this.url, user).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    let errMsg: string;
    try {
        errMsg = JSON.parse(error._body);
    } catch(e){
      errMsg = 'There was an error logging in.';
    }
    return Observable.throw(errMsg);
  }
}
