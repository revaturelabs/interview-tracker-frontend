import { Component, OnInit, Input } from '@angular/core';
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
export class ProfileModalComponent implements OnInit {

  constructor(private interviewService: InterviewService, private skillService: SkillService) { }
  
  @Input()
  public profile: Profile;
  public interviews: Interview[] = [];
  public allSkillsAvailable: Skill[];

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
  }

  close() {
    document.getElementById(this.profile.id.toString()).style.display = 'none';
  }
}
