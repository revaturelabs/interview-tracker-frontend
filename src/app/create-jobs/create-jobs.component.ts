import { Component, OnInit, Output } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SkillService } from '../skill.service';
import { FormControl } from '@angular/forms';
import Skill from 'src/app/models/Skill';

@Component({
  selector: 'app-create-jobs',
  templateUrl: './create-jobs.component.html',
  styleUrls: ['./create-jobs.component.scss']
})
export class CreateJobsComponent implements OnInit {

  constructor(private profServ: ProfileService, private skillServ: SkillService) { }

  @Output() selections = new FormControl();
  title = 'Skills';
  options: Skill[];
  allSkills: Skill[];

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
  }
}
