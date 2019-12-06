import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Job } from 'src/app/models/job';

@Injectable({
  providedIn: "root"
})
export class JobService {
  constructor(private http: HttpClient) {}

  getAllJobs() {
    return this.http.get<Job[]>(environment.main_url + "jobs/allJobs");
  }
  addJob(job: Job) {
    return this.http.post<boolean>(environment.main_url + "jobs/saveJob", job);
  }
}
