import { Injectable } from '@angular/core';
import User from './models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  retrieveAllUsers() {
    const url = "http://localhost:8765/users/allusers";
    return this.http.get<User[]>(url, {});
  }

  loginUser(username: string, password: string) {
    //send request using form or embedded params using this method
  }

}
