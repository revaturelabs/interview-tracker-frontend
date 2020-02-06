import { Injectable } from '@angular/core';
import User from './models/User';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  retrieveAllUsers(): Observable<any> {
    const url = 'http://localhost:8765/interview-service/users/allusers';
    return this.http.get<User[]>(url, {}).pipe(map(this.extractData)).pipe(catchError(this.handleError));
  }

  private extractData(res: any) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg: string;
    try {
      if(JSON.parse(error._body)) {
        errMsg = JSON.parse(error._body);
      } else {
        errMsg = 'There was an error getting all users.';
      }
    } catch(e){
      errMsg = 'There was an error getting all users.';
    }
    return Observable.throwError(errMsg);
  }

}
