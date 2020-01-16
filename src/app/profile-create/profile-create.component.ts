import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { ProfileService } from '../profile.service';
import Profile from '../models/Profile';
import Skill from '../models/Skill';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.scss']
})
export class ProfileCreateComponent implements OnInit {

  newProfile: Profile;
  allSkills: Skill[] = [];

  skillsFilter: Skill;


  constructor(private profileService: ProfileService, private skillService: SkillService) { }

  ngOnInit() {
    this.skillService.retrieveAllSkills().subscribe(data => this.allSkills = data);
    this.newProfile = new Profile(0, "description", "fname", "lname", "location", "email", null);
  }

  registerProfile() {

    this.profileService.saveProfile(this.newProfile).subscribe(data => {
      console.log(data);
      switch(data) {
        case true:
          break;
        case false:
          break;
        default:
          return this.newProfile;
      }
    });
  }

  filterSkills() {

  }

}