import { Component, OnInit, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import Skill from 'src/app/models/Skill';
import { FormControl } from '@angular/forms';
import { SkillService } from 'src/app/skill.service';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss']
})
export class SearchSelectComponent implements OnInit {
  constructor(private skillService: SkillService,
    private eRef: ElementRef) {
    this.allSkills = [];
    this.allSkills.push(new Skill(1, 'Java'));
    this.allSkills.push(new Skill(2, 'React'));
    this.allSkills.push(new Skill(3, 'SQL'));
    this.allSkills.push(new Skill(4, 'Angular'));
    this.allSkills.push(new Skill(5, 'Servlets'));
    this.allSkills.push(new Skill(6, 'JavaScript'));
    this.skillExistsEmitter.emit(this.skillExists);
  }

  selections = new FormControl();
  @Output() emitSelections = new EventEmitter<any>();
  title = 'Skills';
  options: Skill[];
  allSkills: Skill[];
  @Output() skillExistsEmitter = new EventEmitter<any>();
  skillExists = true;

  selectOption() {
    this.emitSelections.emit(this.selections);
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
    } else {
      this.skillExists = true;
      this.skillExistsEmitter.emit(this.skillExists);
    }
  }

  termChanged(event) {
    this.options = this.allSkills.filter(el =>
      el.title.toUpperCase().includes(event.target.value.toUpperCase())
    );
    if(this.options.length == 0){
      this.skillExists = false;
      this.skillExistsEmitter.emit(this.skillExists);
    }
  }

  resetOptions() {
    this.options = this.allSkills;
    
  }

  ngOnInit() {
    // this.skillService
    //   .retrieveAllSkills()
    //   .subscribe(list => {this.allSkills = list; console.log(list)});
    // this.options = this.allSkills;
  }
}
