import { Component, OnInit, Output } from '@angular/core';
import Skill from 'src/app/models/Skill';
import { FormControl } from '@angular/forms';
import { SkillService } from 'src/app/skill.service';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss']
})
export class SearchSelectComponent implements OnInit {
  constructor(private skillService: SkillService) {}

  @Output() selections = new FormControl();
  title = 'Skills';
  options: Skill[];
  allSkills: Skill[];

  termChanged(event) {
    this.options = this.allSkills.filter(el =>
      el.skillTitle.includes(event.target.value)
    );
  }

  resetOptions() {
    this.options = this.allSkills;
  }

  ngOnInit() {
    this.skillService
      .retrieveAllSkills()
      .subscribe(list => (this.allSkills = list));
    this.options = this.allSkills;
  }
}
