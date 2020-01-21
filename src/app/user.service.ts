import { Injectable } from '@angular/core';
import User from './models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  retrieveAllUsers() {
<<<<<<< Updated upstream
    const url = 'http://localhost:8765/interview-service/users/allusers';
=======
    const url = 'http://localhost:8765/user-service/users/allusers';
>>>>>>> Stashed changes
    return this.http.get<User[]>(url, {});
  }

  loginUser(username: string, password: string) {
    // send request using form or embedded params using this method
  }

}
