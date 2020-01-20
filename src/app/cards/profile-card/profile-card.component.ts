import { Component, OnInit, Input } from '@angular/core';
import Profile from 'src/app/models/Profile';
import Card from '../Card';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent extends Card implements OnInit {
  @Input() profile: Profile;

  private profileList: [];

  constructor(/* private profileService: ProfileService */) { 
    super();
  }

  ngOnInit() {
    //this.profileService.retrieveAllProfiles();
  }

  openProfileModal() {
    document.getElementById(this.profile.id.toString()).style.display = 'flex';
    console.log(this.profile);
    console.log(document.getElementById(this.profile.id.toString()));
  }
}
