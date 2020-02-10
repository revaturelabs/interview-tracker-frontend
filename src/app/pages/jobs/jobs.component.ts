import { Component, OnInit, HostListener, Output } from '@angular/core';
import { JobService } from 'src/app/Job-Service/job.service';
import Job from 'src/app/models/Job';
import Skill from 'src/app/models/Skill';
import { FormControl } from '@angular/forms';
import { SkillService } from 'src/app/skill.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})

export class JobsComponent implements OnInit {
  @Output()
  selections = new FormControl();
  title = 'Search skills';
  public jobs: Job[];
  public page: number;
  public atEnd: boolean = false;
  options: Skill[];
  allSkills: Skill[];
  noEntry: boolean = false;

  constructor(private jobServ: JobService, private skillServ: SkillService, ) { }

  ngOnInit() {
    this.page = 0;
    this.jobServ.getAllJobAtPage(this.page).subscribe(data => {
      this.jobs = data;
      if (data.length < 10) {
        this.atEnd = true;
      }
    });
    this.skillServ
      .retrieveAllSkills()
      .subscribe(list => { this.allSkills = list; });
    this.options = this.allSkills;

  }

  //need look here..
  onSearchTermChanged(e) {
    this.page = 0;
    this.noEntry = false;
    let ids: number[] = [];
    if (this.selections.value != null) {
      for (let i = 0; i < this.selections.value.length; i++) {
        ids[i] = this.selections.value[i].id;
      }
    }

    this.jobServ.getAllJobAtPage(this.page, e, ids).subscribe(data => {
      this.jobs = data;
      if (data.length == 0) {
        this.noEntry = true;
        this.atEnd = true;
      } else if (data.length < 10) {
        this.atEnd = true;
      }
    });
  }

  nextPage() {
    this.page++;
    this.jobServ.getAllJobAtPage(this.page).subscribe(data => {
      this.jobs = this.jobs.concat(data);
      if (data.length < 10) {
        this.atEnd = true;
      }
    });
  }

  resetOptions() {
    // Resets options
    this.options = this.allSkills;
  }

  termChanged(event) {
    // Watching for the typing match to see what to filter by
    this.options = this.allSkills.filter(el =>
      el.title.includes(event.target.value)
    );
  }
}
