import { Injectable } from '@angular/core';
import Profile from './models/Interview';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  retrieveSomeProfiles(){
    const url = "http://localhost:8765/interview-service/profiles/allProfiles/1";
    return this.http.get<Profile[]>(url, {});
  }

  retrieveAllProfiles(){
    const url = "http://localhost:8765/interview-service/profiles/allProfiles";
    return this.http.get<Profile[]>(url, {});
  }

  saveProfile(newProfile: Profile){
    const url = "http://localhost:8765/interview-service/profiles/saveProfile";
    this.http.post<Profile>(url, newProfile);
  }

}
