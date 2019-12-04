import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ReturnStatement } from "@angular/compiler";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(environment.main_url + "users/allusers");
  }
}
