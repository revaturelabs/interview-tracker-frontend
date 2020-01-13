import { Component, OnInit } from '@angular/core';
import Card from '../Card';

@Component({
  selector: 'app-interview-card',
  templateUrl: './interview-card.component.html',
  styleUrls: ['./interview-card.component.scss']
})
export class InterviewCardComponent extends Card implements OnInit {
  // tslint:disable-next-line: max-line-length
  sampleDescription = 'Ben Solo has a lot of potential but has dark side tendencies. Dont give him a lightsabre. With his parents being Lea Organa and Han Solo, Kylo is likely to be force sensetive and a scoundrel.';
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
