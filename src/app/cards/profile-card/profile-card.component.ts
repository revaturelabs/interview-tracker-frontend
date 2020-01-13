import { Component, OnInit, Input } from '@angular/core';
import Profile from 'src/app/models/Profile';
import Card from '../Card';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent extends Card implements OnInit {
  @Input() profile: Profile;

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
