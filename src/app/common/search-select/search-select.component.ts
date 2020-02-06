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
  }

  selections = new FormControl();
  @Output() emitSelections = new EventEmitter<any>();
  title = 'Skills';
  options: Skill[];
  allSkills: Skill[];
  @Output() skillExistsEmitter = new EventEmitter<any>();
  skillExists = true;
  @Output() skillTitleEmitter = new EventEmitter<any>();
  searchTerm: string = "";


  selectOption() {
    this.emitSelections.emit(this.selections);
  }

  termChanged(event) {
    this.searchTerm = event.target.value;
    this.options = this.allSkills.filter(el =>
      el.title.toUpperCase().includes(this.searchTerm.toUpperCase())
    );
    if(this.options.length == 0){
      this.skillExists = false;
      this.skillExistsEmitter.emit(this.skillExists);
      this.skillTitleEmitter.emit(this.searchTerm);
    } else {
      this.skillExists = true;
      this.skillExistsEmitter.emit(this.skillExists);
    }
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

  addSkill(event){
    console.log('Enter has been pressed');
    console.log(event.target.value);
    if(this.options.length == 0){
      this.skillService.saveSkills(new Skill(0, event.target.value)).subscribe(
        data => {
          if(data){         
          }
        }, error => {
            console.log('Error ', error);
        }
      );
      } else {
        console.log("Skill already exists");
      }
      this.skillExists = true;
    }
  }

