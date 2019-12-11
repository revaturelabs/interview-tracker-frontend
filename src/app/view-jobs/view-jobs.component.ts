import { Component, OnInit } from "@angular/core";
import { NavbarservService } from "../services/navbarserv.service";
import { NgForm } from "@angular/forms";
import { JobService } from "../services/Job/job.service";
import { Job } from "../models/job";

@Component({
  selector: "app-view-jobs",
  templateUrl: "./view-jobs.component.html",
  styleUrls: ["./view-jobs.component.scss"]
})
export class ViewJobsComponent implements OnInit {
  allJobs: Job[];
  slider: string;
  id: number;
  title: string;
  constructor(public nav: NavbarservService, private jobService: JobService) {}
  noJobsAvailable: String;
  ngOnInit() {
    this.nav.show();
    this.getAllJobs();
  }
  sliderChange(event) {
    if (event.checked === true) {
      this.slider = "Job is filled";
      this.id = event.source.id;
    }
    if (event.checked === false) {
      this.slider = "Job is open";
    }
  }

  submission(form: NgForm) {
    console.log(form.value);
    this.jobService.updateJob(new Job(this.id, this.title)).subscribe(
      j => {
        location.reload();
      },
      err => {
        console.log(err);
      }
    );
  }
  filterS(title: string, searchJob: string): boolean {
    if (typeof searchJob === "undefined") {
      searchJob = "";
      this.noJobsAvailable = "Hey no jobs buddy!";
    }
    return (title + "").toLowerCase().includes((searchJob + "").toLowerCase());
  }
  getAllJobs() {
    this.jobService.getAllJobs().subscribe(
      j => {
        this.allJobs = j;
      },
      err => {
        console.log(err);
      }
    );
  }
}
