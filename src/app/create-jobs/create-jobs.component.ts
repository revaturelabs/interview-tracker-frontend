import { Component, OnInit, Output } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SkillService } from '../skill.service';
import { JobServiceService } from '../Job-Service/job-service.service';
import { FormControl } from '@angular/forms';
import Skill from 'src/app/models/Skill';
import Job from 'src/app/models/Job';
import Profile from '../models/Profile';

@Component({
  selector: 'app-create-jobs',
  templateUrl: './create-jobs.component.html',
  styleUrls: ['./create-jobs.component.scss']
})
export class CreateJobsComponent implements OnInit {

  constructor(private profServ: ProfileService, private skillServ: SkillService, private jobServ: JobServiceService) { }

  @Output() selections = new FormControl();
  newJob: Job;
  title = 'Skills';
  options: Skill[];
  allSkills: Skill[];
  compareCounter: number;
  allProfiles: Profile[];
  percents: number[] = [];
  displayProfiles: Profile[];
  profileHolder: Profile[];
  higherPrecent: number;
  updatedResults: {profile: Profile, percent: number}[] = [];



  compareSkills() {
    if (this.selections.value != null) {
      this.percents = [];

      for (const profile of this.allProfiles) {
        this.compareCounter = 0;

        for (const skill of profile.skills) {

          for (const iter of this.selections.value) {
            if (skill.title == iter.title) {
              this.compareCounter++;
              console.log(this.compareCounter);
            }

          }
          // console.log(this.compareCounter);
          // console.log(this.compareCounter / this.selections.value.length);
        }
        const temp = ((this.compareCounter / this.selections.value.length) * 100);
        this.percents.push(temp);
        console.log(this.percents);
      }
      this.repopulateProfiles();
    }
  }

  repopulateProfiles() {
    this.updatedResults = [];
    for (let index = 0; index < this.allProfiles.length; index++) {
      let newUpdatedProfile = {profile: this.allProfiles[index], percent: this.percents[index]};
      this.updatedResults.push(newUpdatedProfile);
      console.log(this.updatedResults);
    }
    this.updatedResults.sort((a, b) => b.percent - a.percent);
  }


  createJob() {
    this.newJob.skills = this.selections.value;
    this.jobServ.saveJob(this.newJob).subscribe(data => {
      console.log(data);
      switch (data) {
        case true:
          break;
        case false:
          break;
        default:
          return this.newJob;

      }
    });

  }

  termChanged(event) {
    this.options = this.allSkills.filter(el =>
      el.title.includes(event.target.value)
    );
  }

  resetOptions() {
    this.options = this.allSkills;
  }

  ngOnInit() {
    this.skillServ
      .retrieveAllSkills()
      .subscribe(list => { this.allSkills = list; console.log(list); });
    this.options = this.allSkills;
    this.profServ
      .retrieveAllProfiles()
      .subscribe(list => { this.allProfiles = list; console.log(list); });
    this.newJob = new Job(-1, '', '', null, false, []);
  }
}
