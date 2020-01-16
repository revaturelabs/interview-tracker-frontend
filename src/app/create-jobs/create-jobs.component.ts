import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-create-jobs',
  templateUrl: './create-jobs.component.html',
  styleUrls: ['./create-jobs.component.scss']
})
export class CreateJobsComponent implements OnInit {

  constructor(private profServ: ProfileService, private skillServ: SkillService) { }

  ngOnInit() {
  }

}
