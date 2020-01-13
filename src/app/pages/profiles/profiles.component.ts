import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import Profile from 'src/app/models/Profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  profiles: Profile[];
  onSearchTermChanged(e) {
    console.log('In profile.component.ts, value is: ', e);
  }

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.profiles = this.httpService.profiles;
    
  }
}
