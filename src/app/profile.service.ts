import { Injectable } from '@angular/core';
import Profile from './models/Interview';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  retrieveAllProfiles(){
    const url = "http://localhost:8765/profiles/allProfiles";
    return this.http.get<Profile[]>(url, {});
  }

  saveProfile(newProfile: Profile){
    const url = "http://localhost:8765/profiles/saveProfile";
    this.http.post<Profile>(url, newProfile);
  }

}
