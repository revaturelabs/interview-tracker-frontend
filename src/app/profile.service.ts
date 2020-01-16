import { Injectable } from '@angular/core';
import Profile from './models/Interview';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    private url1 = 'http://localhost:8765/interview-service/profiles/allProfiles';

    private url2 = 'http://localhost:8765/interview-service/profiles/saveProfile';

    constructor(private http: HttpClient) { }

  retrieveAllProfiles(){
    return this.http.get<Profile[]>(this.url1, {});
  }

  // saveProfile(newProfile: Profile){
  //   this.http.post<Profile>(this.url2, newProfile);
  // }

  saveProfile(form: any): Observable<boolean> {

    const params = new HttpParams()
    .set('fname', form.value.fname)
    .set('lname', form.value.lname)
    .set('location', form.value.location)
    .set('email', form.value.email)
    .set('description', form.value.description);

    return this.http.post<boolean>(this.url2, params, {});
  }

}