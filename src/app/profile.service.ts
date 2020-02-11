import { Injectable } from '@angular/core';
import Profile from './models/Profile';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url = 'http://localhost:8765/interview-service/profiles';

  constructor(private http: HttpClient) { }

  retrieveSomeProfiles() {

    return this.http.get<Profile[]>(this.url + '/1', {});
  }

  retrieveAllProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url, {});
  }

  saveProfile(newProfile: Profile): Observable<any> {
    return this.http.post<Profile>(this.url, newProfile);
  }

  retrieveAllProfilesAtPage(page: number, text: string = "", skillIds: number[] = null) {
    let idstr: string = skillIds ? skillIds.join(",") : "";
    let params: string = "?filtertext=" + text + "&skillids=" + idstr;

    return this.http.get<Profile[]>(this.url + "/" + page + params);
  }
}