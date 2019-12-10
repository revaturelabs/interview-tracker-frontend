import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Profile } from 'src/app/models/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getAllProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(environment.main_url + "profiles/allProfiles");
  }
}
