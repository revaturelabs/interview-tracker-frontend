import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interview } from 'src/app/models/interview';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private http: HttpClient) { }

  addInterview(interview: Interview) {
    return this.http.post<boolean>(environment.main_url + "interviews/saveInterview", interview);
  }
  getAllInterviews() {
    return this.http.get<Interview[]>(environment.main_url + "interviews/allInterviews");
  }
}
