import { Injectable } from '@angular/core';
import Profile from './models/Profile';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl = 'http://localhost:8765/interview-service/profiles';

  constructor(private http: HttpClient) { }

  retrieveSomeProfiles() {

    return this.http.get<Profile[]>(this.baseUrl + '/1', {}).pipe(catchError(this.handleError));;
  }

  retrieveAllProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.baseUrl, {}).pipe(catchError(this.handleError));;
  }

  saveProfile(newProfile: Profile): Observable<any> {
    return this.http.post<Profile>(this.baseUrl, newProfile).pipe(catchError(this.handleError));;
  }

  retrieveAllProfilesAtPage(page: number, text: string = "", skillIds: number[] = null) {
    let idstr: string = skillIds ? skillIds.join(",") : "";
    let params: string = "?filtertext=" + text + "&skillids=" + idstr;

    return this.http.get<Profile[]>(this.baseUrl + "/" + page + params).pipe(catchError(this.handleError));
  }


  private handleError(error: any) {
    let errMsg: string;
    try {
        errMsg = JSON.parse(error._body);
    } catch(e){
      errMsg = 'There was an issue with the profile service.';
    }
    return Observable.throw(errMsg);
  }
}