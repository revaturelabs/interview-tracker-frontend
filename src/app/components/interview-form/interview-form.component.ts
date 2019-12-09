import { Component, OnInit } from "@angular/core";
import { NavbarservService } from "../../services/navbarserv.service";
import { FormControl, NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";
import { Router } from "@angular/router";
import { Timestamp } from "rxjs/internal/operators/timestamp";
import { MatRadioChange } from "@angular/material";
import { ProfileService } from "src/app/services/Profile/profile.service";
import { JobService } from "src/app/services/Job/job.service";
import { UserService } from "src/app/services/User/user.service";
import { Profile } from "src/app/models/profile";
import { Job } from "src/app/models/job";
import { User } from "src/app/models/user";
import { InterviewService } from "src/app/services/Interview/interview.service";
import { Interview } from "src/app/models/interview";

// the firstName variable actually represents the first and last name together.

@Component({
  selector: "app-interview-form",
  templateUrl: "./interview-form.component.html",
  styleUrls: ["./interview-form.component.scss"]
})
export class InterviewFormComponent implements OnInit {
  myControl = new FormControl();
  jobControl = new FormControl();
  userControl = new FormControl();

  profileOptions: Profile[] = [];
  jobOptions: Job[] = [];
  userOptions: User[] = [];
  profiles: Profile[];
  jobs: Job[];
  allUsers: User[] = [];
  profile: Profile;
  job: Job;
  selectedProfileValue: any;
  selectedJobValue: any;

  filteredProfileOptions: Observable<Profile[]>;
  filteredJobOptions: Observable<Job[]>;
  filteredUserOptions: Observable<User[]>;
  constructor(
    public nav: NavbarservService,
    private router: Router,
    private profileService: ProfileService,
    private jobService: JobService,
    private userService: UserService,
    private interviewService: InterviewService
  ) {}

  ngOnInit() {
    this.nav.show();
    this.getAllProfiles();
    this.getAllJobs();
    this.getAllUsers();

    this.filteredProfileOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => (typeof value === "string" ? value : value.firstName)),
      map(firstName =>
        firstName ? this._profileFilter(firstName) : this.profileOptions.slice()
      )
    );

    this.filteredJobOptions = this.jobControl.valueChanges.pipe(
      startWith(""),
      map(value => (typeof value === "string" ? value : value.title)),
      map(title => (title ? this._jobfilter(title) : this.jobOptions.slice()))
    );
  }

  getAllProfiles(): void {
    this.profileService.getAllProfiles().subscribe(
      r => {
        this.profiles = r as Profile[];
        this.profileOptions = r as Profile[];
      },
      err => console.log(err)
    );
  }

  getAllJobs(): void {
    this.jobService.getAllJobs().subscribe(
      s => {
        this.jobs = s as Job[];
        this.jobOptions = s as Job[];
      },
      err => console.log(err)
    );
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      s => {
        this.allUsers = s as User[];
        console.log(this.allUsers);
      },
      err => console.log(err)
    );
  }

  displayFn(profile?: Profile): string | undefined {
    return profile ? profile.firstName : undefined;
  }

  displayJ(job?: Job): string | undefined {
    return job ? job.title : undefined;
  }

  private _profileFilter(firstName: string): Profile[] {
    const filterValue = firstName.toLowerCase();

    return this.profileOptions.filter(
      option => option.firstName.toLowerCase().indexOf(filterValue) === 0
    );
  }

  private _jobfilter(title: string): Job[] {
    const jobFilterValue = title.toLowerCase();

    return this.jobOptions.filter(
      jobOption => jobOption.title.toLowerCase().indexOf(jobFilterValue) === 0
    );
  }

  submission(form: NgForm) {
    let interview = new Interview();
    interview.profile = this.selectedProfileValue;
    interview.job = this.selectedJobValue;
    interview.date = form.value.date;
    interview.users = this.userOptions;
    console.log(interview);
    this.interviewService.addInterview(interview).subscribe(
      r => {
        console.log(r);
        // this.router.navigateByUrl("/hub");
      },
      err => {
        console.log(err);
      }
    );
  }
  getCheckboxes(event) {
    if (event.checked === true) {
      this.userOptions.push(new User(event.source.name));
      console.log(this.userOptions);
    }
    if (event.checked === false) {
      this.userOptions.splice(
        this.userOptions.indexOf(new User(event.source.name)) - 1,
        1
      );
      // console.log(this.users);
    }
  }

  selectedProfileOption(event) {
    this.selectedProfileValue = event.option.value;
    console.log(this.selectedProfileValue);
  }

  selectedJobOption(event) {
    this.selectedJobValue = event.option.value;
    console.log(this.selectedJobValue);
  }
}
