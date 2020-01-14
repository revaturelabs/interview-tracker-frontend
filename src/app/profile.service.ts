import { Injectable } from '@angular/core';
import Profile from './models/Interview';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  retrieveAllProfiles(){
    const url = "http://localhost:8765/interview-service/profiles/allProfiles";
    return this.http.get<Profile[]>(url, {});
  }

  saveProfile(newProfile: Profile){
    const url = "http://localhost:8765/interview-service/profiles/saveProfile";
    this.http.post<Profile>(url, newProfile);
  }




  // constructor(private http: HttpClient) { }

  // createNewUser(form: any): Observable<number> {

  //   const params = new HttpParams()
  //   .set('username', form.value.username)
  //   .set('userpassword', form.value.password)
  //   .set('userfname', form.value.firstname)
  //   .set('userlname', form.value.lastname)
  //   .set('useremail', form.value.email)
  //   .set('userbirthday', form.value.dob)
  //   .set('usertitle', form.value.title)
  //   .set('userbio', '')
  //   .set('userprofilepic', 'https://campfire-project2.s3.us-east-2.amazonaws.com/profile_picture.svg');

  //   return this.http.post<number>(this.url, params, {withCredentials: true});
  }

