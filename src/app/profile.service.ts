import { Injectable } from '@angular/core';
import Profile from './models/Profile';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url1 = 'http://localhost:8765/interview-service/profiles';

  constructor(private http: HttpClient) { }

  retrieveSomeProfiles() {
    const url = "http://localhost:8765/interview-service/profiles/allProfiles/1";
    return this.http.get<Profile[]>(url, {});
  }

  retrieveAllProfiles(): Observable<Profile[]> {
    const url = "http://localhost:8765/interview-service/profiles/allProfiles";
    return this.http.get<Profile[]>(url, {});
  }

  saveProfile(newProfile: Profile): Observable<any> {
    const url = "http://localhost:8765/interview-service/profiles";
    return this.http.post<Profile>(url, newProfile);
  }

  retrieveAllProfilesAtPage(page: number, text: string = "", skillIds: number[] = null) {
    let idstr: string = skillIds ? skillIds.join(",") : "";
    let params: string = "?filtertext=" + text + "&skillids=" + idstr;

    return this.http.get<Profile[]>(this.url1 + "/" + page + params);
  }
}