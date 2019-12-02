import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../../services/navbarserv.service';
import { FormControl, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { MatRadioChange } from '@angular/material';

// the firstName variable actually represents the first and last name together.

export interface Profile {
  firstName: any;
  id: number;
}
export interface Job {
  title: any;
  id: number;
  filled: boolean;
}
export interface User {
  username: any;
  id: number;
}

@Component({
  selector: 'app-interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.scss']
})
export class InterviewFormComponent implements OnInit {
  myControl = new FormControl();
  jobControl = new FormControl();
  userControl = new FormControl();

  options: Profile[] = [];
  jobOptions: Job[] = [];
  userOptions: User[] = [];
  profiles: any;
  jobs: any;
  users: any;
  user: any[] = [];
  profile: any;
  job: any;
  selectedValue: any;
  selectedJobValue: any;

  filteredOptions: Observable<Profile[]>;
  filteredJobOptions: Observable<Job[]>;
  filteredUserOptions: Observable<User[]>;
  constructor( public nav: NavbarservService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.nav.show();

    this.http.get(environment.main_url + 'profiles/allProfiles').toPromise().then(r => {
      this.profiles = r;
      for (const p of this.profiles) {
        this.options.push({firstName: p.firstName + ' ' + p.lastName, id: p.id});
      }
    });

    this.http.get(environment.main_url + 'jobs/allJobs').toPromise().then(s => {
      this.jobs = s;
      for (const j of this.jobs) {
        this.jobOptions.push({title: j.title, id: j.id, filled: j.filled});
      }
    });

    this.http.get(environment.login_url + 'users/allusers').toPromise().then(s => {
      this.users = s;
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.firstName),
        map(firstName => firstName ? this._filter(firstName) : this.options.slice())
      );

    this.filteredJobOptions = this.jobControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.title),
        map(title => title ? this._jobfilter(title) : this.jobOptions.slice())
      );

   }

  displayFn(profile?: Profile): string | undefined {
    return profile ? profile.firstName : undefined;
  }

  displayJ(job?: Job): string | undefined {
    return job ? job.title : undefined;
  }

  private _filter(firstName: string): Profile[] {
    const filterValue = firstName.toLowerCase();

    return this.options.filter(option => option.firstName.toLowerCase().indexOf(filterValue) === 0);
  }

  private _jobfilter(title: string): Job[] {
    const jobFilterValue = title.toLowerCase();

    return this.jobOptions.filter(jobOption => jobOption.title.toLowerCase().indexOf(jobFilterValue) === 0);
  }

  submission(form: NgForm) {
    this.http.post(environment.main_url + 'interviews/saveInterview', {
      profile: this.selectedValue,
      job: this.selectedJobValue,
      date: form.value.date,
      users: this.user

    })
    .toPromise()
    .then((r: {profile: object; job: object; date: Timestamp<Date>, users: any}) => {
      console.log(r);
      this.router.navigateByUrl('/hub');
    })
    .catch(e => console.log(e));
  }
  getCheckboxes(event) {
    if (event.checked === true) {
    this.user.push({username : event.source.name});
    console.log(this.user);
    }
    if (event.checked === false) {
      this.user.splice(this.user.indexOf({username: event.source.name}) - 1, 1);
      console.log(this.user);
    }
    }

    selectedOption(event) {
      this.selectedValue = event.option.value;
      console.log(this.selectedValue);
   }

   selectedJobOption(event) {
    this.selectedJobValue = event.option.value;
    console.log(this.selectedJobValue);
 }


   }


