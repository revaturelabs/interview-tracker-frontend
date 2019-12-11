import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "src/app/models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<User[]>(environment.main_url + "users/allusers");
  }

  login(user: User) {
    console.log(user);
    return this.http.post<User>(environment.main_url + "users/login", user);
  }
}
