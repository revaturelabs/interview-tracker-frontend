import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Interview from '../models/Interview';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  constructor(private http: HttpClient) { }

  retrieveAllInterviews() {
    const url = 'http://localhost:8765/interview/allInterviews';
    return this.http.get<Interview[]>(url, {});
  }

  retrieveInterviewById(id: number) {
    const url = 'http://localhost:8765/interview/id/' + id;
    return this.http.get<Interview[]>(url, {});
  }

  saveInterview(newInterview: Interview) {
    const url = 'http://localhost:8765/interview/saveInterview';
    this.http.post<Interview>(url, newInterview);
  }
}
