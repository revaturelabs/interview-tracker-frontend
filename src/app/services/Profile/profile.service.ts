import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Profile } from 'src/app/models/profile';

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getAllProfiles() {
    return this.http.get<Profile[]>(environment.main_url + "profiles/allProfiles");
  }
}
