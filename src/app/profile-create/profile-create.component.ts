import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { ProfileService } from '../profile.service';
import Profile from '../models/Profile';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.scss']
})
export class ProfileCreateComponent implements OnInit {

  newProfile: Profile;

  constructor(private profileService: ProfileService, private skillService: SkillService) { }

  ngOnInit() {
  }

  registerProfile(form: any) {
    console.log(form);

    // this.profileService.saveProfile(form).subscribe(data => {
    //   console.log(data);
    //   switch(data) {
    //     case true:
    //       break;
    //     case false:
    //       break;
    //     default:
    //       form.reset();
      // }
    // });
  }
}