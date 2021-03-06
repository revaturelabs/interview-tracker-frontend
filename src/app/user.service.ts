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
    return this.http.get<User[]>(url, {}).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    let errMsg: string;
    try {
      errMsg = JSON.parse(error._body);
    } catch(e){
      errMsg = 'There was an error getting all users.';
    }
    return Observable.throwError(errMsg);
  }
}
