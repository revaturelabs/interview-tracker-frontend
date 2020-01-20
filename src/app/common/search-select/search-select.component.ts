import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  selections = new FormControl();
  @Output() emitSelections = new EventEmitter<any>();
  title = 'Skills';
  options: Skill[];
  allSkills: Skill[];

  selectOption() {
    this.emitSelections.emit(this.selections);
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
    this.skillService
      .retrieveAllSkills()
      .subscribe(list => {this.allSkills = list; console.log(list)});
    this.options = this.allSkills;
  }
}
