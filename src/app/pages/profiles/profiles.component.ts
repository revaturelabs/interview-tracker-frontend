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
  public page: number;
  public atEnd: boolean = false;

  onSearchTermChanged(e) {
    console.log('In profile.component.ts, value is: ', e);
  }

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.page = 1;
    this.profileService.retrieveAllProfilesAtPage(this.page).subscribe(data => {
     this.profiles = data;
     if(data.length < 10)
     {
       this.atEnd = true;
     }
     //console.log(data);
    });

  }


  nextPage()
  {
    this.page++;
    this.profileService.retrieveAllProfilesAtPage(this.page).subscribe(data => {
      this.profiles = this.profiles.concat(data);
      if(data.length < 10)
      {
        this.atEnd = true;
      }
    });
  }
}
