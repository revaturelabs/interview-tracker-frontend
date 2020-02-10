import { Injectable } from '@angular/core';
import Job from '../models/Job';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Profile from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private url = 'http://localhost:8765/interview-service/jobs';
  createdJob: Job;
  queuedInterviews: Profile[];
  constructor(private httpServ: HttpClient) { }

  saveJob(job: Job) {
    return this.httpServ.post<Job>(this.url + '/saveJob', job);
  }

  updateJob(job: Job) {
    return this.httpServ.patch<boolean>(this.url + '/updateJob', job);
  }

  getAllJobs() {
    return this.httpServ.get<Job[]>(this.url + '/allJobs');
  }

  getAllJobAtPage(page: number, text: string = "", skillIds: number[] = null) {
    let idstr: string = skillIds ? skillIds.join(",") : "";
    let params: string = "?filtertext=" + text + "&skillids=" + idstr;

    return this.httpServ.get<Job[]>(this.url + '/allJobs/' + page + params);
  }

  getByTitle(title: string) {
    return this.httpServ.get<Job>(this.url + '/jobTitle/' + title);
  }

  getByTitlePaged(title: string, page: number) {
    return this.httpServ.get<Job>(this.url + '/jobTitle/' + title + '/' + page);
  }
}
