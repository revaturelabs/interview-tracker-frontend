import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Component, OnInit, Input } from '@angular/core';
import Job from 'src/app/models/Job';
import Card from 'src/app/cards/Card';
import { MatCardModule } from '@angular/material/card';
import Skill from 'src/app/models/Skill';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent extends Card implements OnInit {
  @Input() job: Job;
  private modal;

  constructor() {
    super();
  }

  showCreate() {
    console.log('yessah');
  }


  ngOnInit() { }

  openJobModal() {
    this.modal = document.getElementById(this.job.id.toString());
    this.modal.style.display = 'block';
  }
}
