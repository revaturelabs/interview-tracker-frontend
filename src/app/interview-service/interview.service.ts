import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Interview from '../models/Interview';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  constructor(private http: HttpClient) { }

  retrieveAllInterviews() {
    const url = 'http://localhost:8765/interview-service/interviews/allInterviews';
    return this.http.get<Interview[]>(url, {});
  }

  retrieveInterviewById(id: number) {
    const url = 'http://localhost:8765/interview-service/interviews/id/' + id;
    return this.http.get<Interview[]>(url, {});
  }

  retrieveInterviewByJobId(id: number) {
    const url = 'http://localhost:8765/interview-service/interviews/job/'+ id;
    return this.http.get<Interview[]>(url, {});
  }

  saveInterview(newInterview: Interview) {
    const url = 'http://localhost:8765/interview-service/interviews/saveInterview';
    console.log(newInterview);
    console.log('interview sent to back end');
    return this.http.post<boolean>(url, newInterview);
  }

  retrieveInterviewsByProfileId(id: number) {
    const url = 'http://localhost:8765/interview-service/interviews/profile/' + id;
    return this.http.get<Interview[]>(url, {});
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
    return this.http.get<Interview[]>(url, {});
  }
}
