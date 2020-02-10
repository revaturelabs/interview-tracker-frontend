import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Interview from '../models/Interview';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  constructor(private http: HttpClient) { }

  retrieveAllInterviews() {
    const url = 'http://localhost:8765/interview-service/interviews/allInterviews';
    return this.http.get<Interview[]>(url, {}).pipe(catchError(this.handleError));
  }

  retrieveInterviewById(id: number) {
    const url = 'http://localhost:8765/interview-service/interviews/id/' + id;
    return this.http.get<Interview>(url, {}).pipe(catchError(this.handleError));
  }

  retrieveInterviewByJobId(id: number) {
    const url = 'http://localhost:8765/interview-service/interviews/job/'+ id;
    return this.http.get<Interview[]>(url, {}).pipe(catchError(this.handleError));
  }

  saveInterview(newInterview: Interview) {
    const url = 'http://localhost:8765/interview-service/interviews/saveInterview';
    console.log(newInterview);
    console.log('interview sent to back end');
    return this.http.post<boolean>(url, newInterview).pipe(catchError(this.handleError));
  }

  retrieveInterviewsByProfileId(id: number) {
    const url = 'http://localhost:8765/interview-service/interviews/profile/' + id;
    return this.http.get<Interview[]>(url, {}).pipe(catchError(this.handleError));
  }

  retrieveInterviewsByDate(year: number, month?: number, day?: number) {
    let url;
    if (year) {
      url = 'http://localhost:8765/interview-service/interviews/date/' + year;
      if (month) {
        url = url + '/' + month;
        if (day) {
          url = url + '/' + day;
        }
      }
    }
    return this.http.get<Interview[]>(url, {}).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    let errMsg: string;
    try {
        errMsg = JSON.parse(error._body);
    } catch(e){
      errMsg = 'There was an issue with the interview service.';
    }
    return Observable.throwError(errMsg);
  }
}
