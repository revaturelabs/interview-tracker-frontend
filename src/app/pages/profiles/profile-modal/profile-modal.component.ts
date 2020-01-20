import { Component, OnInit, Input, KeyValueDiffer } from '@angular/core';
import { InterviewService } from 'src/app/interview-service/interview.service';
import Profile from 'src/app/models/Profile';
import Interview from 'src/app/models/Interview';
import { FormControl } from '@angular/forms';
import { SkillService } from 'src/app/skill.service';
import Skill from 'src/app/models/Skill';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent implements OnInit {

  constructor(private interviewService: InterviewService, private skillService: SkillService, private profileService: ProfileService) { }

  @Input()
  public profile: Profile;
  public interviews: Interview[] = [];
  public allSkillsAvailable: Skill[];

  private skillDiffer: KeyValueDiffer<any, any>;

  public skillSelect = new FormControl();

  ngOnInit() {
    this.interviewService.retrieveInterviewsByProfileId(this.profile.id).subscribe(
      data => {
        this.interviews = data;
        this.skillSelect.setValue(this.profile.skills);
      }
    );
    this.skillService.retrieveAllSkills().subscribe(
      skills => {
        this.allSkillsAvailable = skills;
        this.skillSelect.setValue(this.profile.skills);
      }
    );
    this.skillSelect.valueChanges.subscribe(
      selectedSkills => {
        this.profile.skills = selectedSkills;
        this.profileService.saveProfile(this.profile).subscribe( data => console.log('tempo:' + data));
      }
    );
  }

  close() {
    document.getElementById(this.profile.id.toString()).style.display = 'none';
  }
}
