import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import Profile from 'src/app/models/Profile';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  profiles: Profile[] = [];
  onSearchTermChanged(e) {
    console.log('In profile.component.ts, value is: ', e);
  }

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.retrieveAllProfiles().subscribe(data=> {
     this.profiles=data;
     console.log(data);
    });
    
  }
}
