import { Component, OnInit, Output } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SkillService } from '../skill.service';
import { JobServiceService } from '../Job-Service/job-service.service';
import { FormControl } from '@angular/forms';
import Skill from 'src/app/models/Skill';
import Job from 'src/app/models/Job';
import Profile from '../models/Profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-jobs',
  templateUrl: './create-jobs.component.html',
  styleUrls: ['./create-jobs.component.scss']
})
export class CreateJobsComponent implements OnInit {

  constructor(private profServ: ProfileService, private skillServ: SkillService, private jobServ: JobServiceService,
              private myRouter: Router) { }

  @Output() selections = new FormControl();
  selectedProfiles = new FormControl();
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
    // Each time a new selection is made on the left column, the right column will update to assign each profile a 
    // respective percent match. These percents are sorted by the repopulateProfiles() function. 
    if (this.selections.value != null) {
      this.percents = [];

      for (const profile of this.allProfiles) {
        this.compareCounter = 0;

        for (const skill of profile.skills) {

          for (const iter of this.selections.value) {
            if (skill.title === iter.title) {
              this.compareCounter++;
            }

          }
        }
        const temp = ((this.compareCounter / this.selections.value.length) * 100) || 0;
        this.percents.push(temp);
      }
      this.repopulateProfiles();
    }
  }

  repopulateProfiles() {
    // This method takes the profiles after they've had their percent match of skills to the selection determined and sorts them
    this.updatedResults = [];
    for (let index = 0; index < this.allProfiles.length; index++) {
      let newUpdatedProfile = {profile: this.allProfiles[index], percent: this.percents[index]};
      this.updatedResults.push(newUpdatedProfile);
    }
    this.updatedResults.sort((a, b) => b.percent - a.percent);
  }


  createJob() {
    // Persists a new job once the submit button is hit to the back-end, then it returns the response. 
    this.newJob.skills = this.selections.value;
    this.jobServ.queuedInterviews = this.selectedProfiles.value;
    this.jobServ.createdJob = this.newJob;
    this.jobServ.saveJob(this.newJob).subscribe(data => {
      switch (data) {
        case true:
          break;
        case false:
          break;
        default:
          break;
      }
      this.myRouter.navigate(['/createinterview']);
    });

  }

  termChanged(event) {
    // Watching for the typing match to see what to filter by
    this.options = this.allSkills.filter(el =>
      el.title.includes(event.target.value)
    );
  }

  resetOptions() {
    // Resets options
    this.options = this.allSkills;
  }

  ngOnInit() {
    this.skillServ
      .retrieveAllSkills()
      .subscribe(list => { this.allSkills = list; });
    this.options = this.allSkills;
    this.profServ
      .retrieveAllProfiles()
      .subscribe(list => { this.allProfiles = list; });
    this.newJob = new Job(-1, '', '', null, false, []);
  }
}
