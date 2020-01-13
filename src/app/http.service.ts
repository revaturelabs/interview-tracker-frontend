import { Injectable } from '@angular/core';
import Interview from './models/Interview';
import Job from './models/Job';
import Profile from './models/Profile';
import Skill from './models/Skill';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  rootUrl = 'http://localhost:8761';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  };
  interviewers = [
    'Luke Skywalker',
    'Tony Stark',
    'John Wick',
    'Jim Bob',
    'Holy Cow',
    'Hot Cheetos'
  ];
  profiles: Profile[]; // = profileSeed;
  interviews: Interview[]; // = interviewSeed;
  jobs: Job[];
  skills: Skill[];

  constructor(private http: HttpClient, private router: Router) {
    this.getJSON('assets/seed/interviews.json').subscribe(
      data => (this.interviews = data)
    );
    this.getJSON('assets/seed/profiles.json').subscribe(data => {
      console.log(data);
      this.profiles = data;
    });
  }

  public getJSON(url): Observable<any> {
    return this.http.get(url);
  }

  // METHODS BELOW ARE NOT FUNCTIONAL AT THIS POINT - 1.13.2020
  // They are currently marking what methods will likely be needed for this project
  // public login(username: string, password: string) {
  //   const loginCredentials = {username, password};
  //   this.http.post<User>(`${this.rootUrl}/users/login`,
  //   loginCredentials,
  //   this.httpOptions
  //   )
  //   .subscribe(user => {
  //     this.user = user;
  //   });
  // }

  // No logout api to hit atm
  // Need to resolve how we want to handle users
  // public logout() {
  //   this.http
  //     .get<void>(`${this.rootUrl}/users/logout`, this.httpOptions)
  //     .subscribe(() => {
  //       this.user = null;
  //       localStorage.clear();
  //       sessionStorage.clear();
  //       this.router.navigate(['/login']);
  //     });
  // }

  // Get Methods
  public getInterviews(): Observable<Array<Interview>> {
    return this.http.get<Array<Interview>>(
      `${this.rootUrl}/interviews/allInterviews`,
      this.httpOptions
    );
  }

  public getJobs(): Observable<Array<Job>> {
    return this.http.get<Array<Job>>(
      `${this.rootUrl}/jobs/allJobs`,
      this.httpOptions
    );
  }

  public getProfiles(): Observable<Array<Profile>> {
    return this.http.get<Array<Profile>>(
      `${this.rootUrl}/profiles/allProfiles`,
      this.httpOptions
    );
  }

  public getSkills(): Observable<Array<Skill>> {
    return this.http.get<Array<Skill>>(
      `${this.rootUrl}/skills/allSkills`,
      this.httpOptions
    );
  }

  // Create Methods
  // Not passing back Id's and Dates in these methods
  public createInterview(
    jobTitle: string,
    interviewee: string,
    interviewer: string,
    status: string
  ): Observable<boolean> {
    const newInterview = {
      jobTitle,
      interviewee,
      interviewer,
      status
    };
    return this.http.post<boolean>(
      `${this.rootUrl}/interviews/saveInterview`,
      newInterview,
      this.httpOptions
    );
  }

  public createJob(
    jobTitle: string,
    jobDescription: string,
    jobLocation: string,
    jobFilled: boolean
  ): Observable<boolean> {
    const newJob = {
      jobTitle,
      jobDescription,
      jobLocation,
      jobFilled
    };
    return this.http.post<boolean>(
      `${this.rootUrl}/jobs/saveJob`,
      newJob,
      this.httpOptions
    );
  }

  public createProfile(
    profileDescription: string,
    profileFirstName: string,
    profileLastName: string,
    profileLocation: string,
    profileEmailAddress: string
  ): Observable<boolean> {
    const newProfile = {
      profileDescription,
      profileFirstName,
      profileLastName,
      profileLocation,
      profileEmailAddress
    };
    return this.http.post<boolean>(
      `${this.rootUrl}/profiles/saveProfile`,
      newProfile,
      this.httpOptions
    );
  }

  // Edit Methods
  // No endpoints created for editing anything atm
  public editInterview(
    newjobTitle: string,
    newinterviewee: string,
    newinterviewer: string,
    newstatus: string
  ): void {
    this.http
      .post<Interview>(
        `${this.rootUrl}/interviews/editInterview`,
        { newjobTitle, newinterviewee, newinterviewer, newstatus },
        this.httpOptions
      )
      .subscribe(updatedInterview => {
        if (!updatedInterview) {
          alert('Whoops! Something went wrong.');
        } else {
          // Get new interview list?
          this.router.navigate(['/interviews']);
        }
      });
  }

  public editJob(
    newjobTitle: string,
    newjobDescription: string,
    newjobLocation: string,
    newjobFilled: boolean
  ): void {
    this.http
      .post<Job>(
        `${this.rootUrl}/jobs/editJob`,
        { newjobTitle, newjobDescription, newjobLocation, newjobFilled },
        this.httpOptions
      )
      .subscribe(updatedJob => {
        if (!updatedJob) {
          alert('Whoops! Something went wrong.');
        } else {
          // Get new job list?
          this.router.navigate(['/jobs']);
        }
      });
  }

  public editProfile(
    newprofileDescription: string,
    newprofileFirstName: string,
    newprofileLastName: string,
    newprofileLocation: string,
    newprofileEmailAddress: string
  ): void {
    this.http
      .post<Profile>(
        `${this.rootUrl}/profiles/editProfile`,
        { newprofileDescription, newprofileFirstName, newprofileLastName, newprofileLocation, newprofileEmailAddress },
        this.httpOptions
      )
      .subscribe(updatedProfile => {
        if (!updatedProfile) {
          alert('Whoops! Something went wrong.');
        } else {
          // Get new profile list?
          this.router.navigate(['/profiles']);
        }
      });
  }
}
