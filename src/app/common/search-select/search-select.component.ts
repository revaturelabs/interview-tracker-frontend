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
  skillExists = true;
  searchTerm: string = "";
  skillCreated = false;


  selectOption() {
    this.emitSelections.emit(this.selections);
  }

  termChanged(searchTerm) {
    this.options = this.allSkills.filter(el =>
      el.title.toUpperCase().includes(this.searchTerm.toUpperCase())
    );
    if(this.options.length == 0){
      this.skillExists = false;
    } else {
      this.skillExists = true;
    }
  }

  resetOptions() {
    this.allSkills
    this.options = this.allSkills;
  }

  ngOnInit() {
    this.skillService
      .retrieveAllSkills()
      .subscribe(list => {this.allSkills = list; console.log(list)});
    this.options = this.allSkills;
  }

  addSkill(searchTerm){
    if(this.options.length == 0){
      this.skillService.saveSkills(new Skill(0, this.searchTerm)).subscribe(
        data => {
          if(data){    
            this.skillExists = true;
            this.skillCreated = true;
            this.allSkills.push(new Skill(0, this.searchTerm));   
            setTimeout(()=>{ this.searchTerm = ""; this.skillCreated=false; }, 1100)  
          }
        }, error => {
            console.log('Error ', error);
        }
      );
      } else {
        console.log("Skill already exists");
      }
    }
   
    
  }

