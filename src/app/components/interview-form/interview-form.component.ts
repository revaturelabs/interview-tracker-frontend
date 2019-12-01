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

export interface Profile {
  name: any;
  id: number;
}
export interface Job {
  title: any;
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

  filteredOptions: Observable<Profile[]>;
  filteredJobOptions: Observable<Job[]>;
  filteredUserOptions: Observable<User[]>;
  constructor( public nav: NavbarservService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.nav.show();

    this.http.get(environment.main_url + 'profiles/allProfiles').toPromise().then(r => {
      this.profiles = r;
      console.log(this.profiles);
      for (let p of this.profiles) {
        this.options.push({name: p.firstName + ' ' + p.lastName, id: p.id});
        console.log(this.options);
      }
    });

    this.http.get(environment.main_url + 'jobs/allJobs').toPromise().then(s => {
      this.jobs = s;
      console.log(this.jobs);
      for (const j of this.jobs) {
        this.jobOptions.push({title: j.title});
      }
      console.log(this.jobOptions);
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.filteredJobOptions = this.jobControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.title),
        map(title => title ? this._jobfilter(title) : this.jobOptions.slice())
      );

   }

  displayFn(profile?: Profile): string | undefined {
    return profile ? profile.name : undefined;
  }

  displayJ(job?: Job): string | undefined {
    return job ? job.title : undefined;
  }

  private _filter(name: string): Profile[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _jobfilter(title: string): Job[] {
    const jobFilterValue = title.toLowerCase();

    return this.jobOptions.filter(jobOption => jobOption.title.toLowerCase().indexOf(jobFilterValue) === 0);
  }


  submission(form: NgForm) {
    this.http.post(environment.main_url + 'interviews/saveInterview', {
      profile: form.value.option,
      // job: form.value.jobOption,
      date: form.value.date,
      // user: form.value.userOption

    })
    .toPromise()
    .then((r: {profile: object; job: object; date: Timestamp<Date>, user: any}) => {
      console.log(r);
      this.router.navigateByUrl('/hub');
    })
    .catch(e => console.log(e));
  }
  getCheckboxes(event) {
    if (event.checked === true) {
    this.users.push({id : event.source.id});
    }
    if (event.checked === false) {
      this.users.splice(this.users.indexOf({id: event.source.id}) - 1, 1);
    }
    }


   }


