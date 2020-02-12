import { Injectable } from '@angular/core';
import Job from '../models/Job';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Profile from '../models/Profile';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private url = 'http://localhost:8765/interview-service/jobs';
  createdJob: Job;
  queuedInterviews: Profile[];
  constructor(private httpServ: HttpClient) { }

  saveJob(job: Job) {
    return this.httpServ.post<Job>(this.url, job).pipe(catchError(this.handleError));
  }

  getAllJobs() {
    return this.httpServ.get<Job[]>(this.url).pipe(catchError(this.handleError));
  }

  getAllJobAtPage(page: number, text: string = "", skillIds: number[] = null) {
    let idstr: string = skillIds ? skillIds.join(",") : "";
    let params: string = "?filtertext=" + text + "&skillids=" + idstr;

    return this.httpServ.get<Job[]>(this.url + '/' + page + params).pipe(catchError(this.handleError));
  }

  getByTitle(title: string) {
    return this.httpServ.get<Job>(this.url + '/title/' + title).pipe(catchError(this.handleError));
  }

  getByTitlePaged(title: string, page: number) {
    return this.httpServ.get<Job>(this.url + '/title/' + title + '/' + page).pipe(catchError(this.handleError));
  }

  private handleError(error: any){
    let errMsg: string;
    try{
        console.log(error);
        errMsg = JSON.parse(error._body);      
    } catch(e){
      errMsg = 'There was an issue with the job service.';
    }
    return Observable.throwError(errMsg);
  }
}
