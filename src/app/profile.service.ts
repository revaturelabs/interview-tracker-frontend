import { Injectable } from '@angular/core';
import Profile from './models/Interview';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  retrieveAllProfiles(): Observable<Profile[]>{
    const url = 'http://localhost:8765/interview-service/profiles/allProfiles';
    return this.http.get<Profile[]>(url, {});
  }

  saveProfile(newProfile: Profile){
    const url = "http://localhost:8765/profiles/saveProfile";
    this.http.post<Profile>(url, newProfile);
  }

}
