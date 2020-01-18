import { Component, OnInit, Input, KeyValueDiffer, KeyValueChanges, KeyValueDiffers, DoCheck } from '@angular/core';
import { InterviewService } from 'src/app/interview-service/interview.service';
import Profile from 'src/app/models/Profile';
import Interview from 'src/app/models/Interview';
import { FormControl } from '@angular/forms';
import { SkillService } from 'src/app/skill.service';
import Skill from 'src/app/models/Skill';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent implements OnInit, DoCheck {

  constructor(private interviewService: InterviewService, private skillService: SkillService, private differs: KeyValueDiffers) { }

  @Input()
  public profile: Profile;
  public interviews: Interview[] = [];
  public allSkillsAvailable: Skill[];

  private skillDiffer: KeyValueDiffer<any, any>;

  public skillSelect = new FormControl();

  ngOnInit() {
    console.log(this.profile);
    if (this.profile) {
      this.interviewService.retrieveInterviewsByProfileId(this.profile.id).subscribe( data => {
        this.interviews = data;
        console.log(this.interviews);
      });
    }
    this.skillService.retrieveAllSkills().subscribe( skills => this.allSkillsAvailable = skills );
    this.skillDiffer = this.differs.find(this.profile.skills).create();
  }

  ngDoCheck() {
    const changes = this.skillDiffer.diff(this.profile.skills);
    if(changes)
    {
      console.log("mat-select");
    }
  }

  close() {
    document.getElementById(this.profile.id.toString()).style.display = 'none';
  }
}
