import { Injectable } from '@angular/core';
import Job from '../models/Job';
import { HttpClient } from '@angular/common/http';
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
    return this.httpServ.post<Job>(this.url, job);
  }

  updateJob(job: Job) {
    return this.httpServ.patch<boolean>(this.url, job);
  }

  getAllJobs() {
    return this.httpServ.get<Job[]>(this.url);
  }

  getAllJobAtPage(page: number) {
    return this.httpServ.get<Job[]>(this.url + '/' + page);
  }

  getByTitle(title: string) {
    return this.httpServ.get<Job>(this.url + '/title/' + title);
  }

  getByTitlePaged(title: string, page: number) {
    return this.httpServ.get<Job>(this.url + '/title/' + title + '/' + page);
  }

}
