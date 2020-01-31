import { Injectable } from '@angular/core';
// import Profile from './models/Interview';
// import { HttpClient, HttpParams } from '@angular/common/http';
import Profile from './models/Profile';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public url1 = 'http://localhost:8765/interview-service/profiles/allProfiles';

  public url2 = 'http://localhost:8765/interview-service/profiles/saveProfile';

  constructor(private http: HttpClient) { }

  // retrieveAllProfiles(){
  //   return this.http.get<Profile[]>(this.url1, {});
  // }

  // saveProfile(newProfile: Profile): Observable<boolean> {
  //   return this.http.post<boolean>(this.url2, newProfile);
  // }

  // saveProfile(form: any): Observable<boolean> {

  //   const params = new HttpParams()
  //   .set('fname', form.value.fname)
  //   .set('lname', form.value.lname)
  //   .set('location', form.value.location)
  //   .set('email', form.value.email)
  //   .set('description', form.value.description)
  //   .set('skills', form.value.skills);

  //   return this.http.post<boolean>(this.url2, params, {});

  // }


  retrieveSomeProfiles() {
    const url = "http://localhost:8765/interview-service/profiles/allProfiles/1";
    return this.http.get<Profile[]>(url, {});
  }

  retrieveAllProfiles(): Observable<Profile[]> {
    const url = "http://localhost:8765/interview-service/profiles/allProfiles";
    return this.http.get<Profile[]>(url, {});
  }

  saveProfile(newProfile: Profile): Observable<any> {
    const url = "http://localhost:8765/interview-service/profiles/saveProfile";
    return this.http.post<Profile>(url, newProfile);
  }

  retrieveAllProfilesAtPage(page: number, useFilter: boolean = false, value: string = "") {
    let headers = new HttpHeaders({
      "Content-Type": "application/JSON",
      "usefilter": useFilter == true ? "1" : "0",
      "value" : value
    });

    const url = "http://localhost:8765/interview-service/profiles/allProfiles";
    return this.http.get<Profile[]>(url + '/' + page, { headers });
  }
}