import { Injectable } from '@angular/core';
import Profile from './models/Profile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  retrieveSomeProfiles(){
    const url = "http://localhost:8765/interview-service/profiles/allProfiles/1";
    return this.http.get<Profile[]>(url, {});
  }

  retrieveAllProfiles(): Observable<Profile[]>{
    const url = "http://localhost:8765/interview-service/profiles/allProfiles";
    return this.http.get<Profile[]>(url, {});
  }

  saveProfile(newProfile: Profile): Observable<any> {
    const url = "http://localhost:8765/interview-service/profiles/saveProfile";
    return this.http.post<Profile>(url, newProfile);
  }

}
