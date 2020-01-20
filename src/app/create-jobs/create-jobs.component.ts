import { Component, OnInit, Output } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SkillService } from '../skill.service';
import { JobServiceService } from '../Job-Service/job-service.service';
import { FormControl } from '@angular/forms';
import Skill from 'src/app/models/Skill';
import Jobs from 'src/app/models/Job';
import Job from 'src/app/models/Job';

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
  

  createJob(){
    this.newJob.skills = this.selections.value;
    this.jobServ.saveJob(this.newJob).subscribe(data =>{
      console.log(data);
      switch(data){
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
      .subscribe(list => {this.allSkills = list; console.log(list)});
    this.options = this.allSkills;
    this.newJob = new Job(-1, "", "", null, false,[]);
  }
}
