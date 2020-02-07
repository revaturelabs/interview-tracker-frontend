import { Component, OnInit, Output } from '@angular/core';
import { HttpService } from '../../http.service';
import Profile from 'src/app/models/Profile';
import { ProfileService } from 'src/app/profile.service';
import { FormControl } from '@angular/forms';
import Skill from 'src/app/models/Skill';
import { SkillService } from 'src/app/skill.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  @Output()
  selections = new FormControl();
  title = 'Search skills';
  options: Skill[];
  allSkills: Skill[];
  profiles: Profile[] = [];
  public page: number;
  public atEnd: boolean = false;
  noEntry: boolean = false;

  onSearchTermChanged(e) {
    this.page = 0;
    this.noEntry = false;
    let ids: number[] = [];
    if (this.selections.value != null) {
      for (let i = 0; i < this.selections.value.length; i++) {
        ids[i] = this.selections.value[i].id;
      }
    }

    this.profileService.retrieveAllProfilesAtPage(this.page, true, e, ids).subscribe(data => {
      this.profiles = data;
      if (data.length == 0) {
        this.noEntry = true;
        this.atEnd = true;
      } else if (data.length < 10) {
        this.atEnd = true;
      }
    });
  }

  constructor(private profileService: ProfileService, private skillServ: SkillService, ) { }

  ngOnInit() {
    this.page = 0;
    this.profileService.retrieveAllProfilesAtPage(this.page).subscribe(data => {
      this.profiles = data;
      if (data.length < 10) {
        this.atEnd = true;
      }
    });
    this.skillServ
      .retrieveAllSkills()
      .subscribe(list => { this.allSkills = list; });
    this.options = this.allSkills;

  }

  nextPage() {
    this.page++;
    this.profileService.retrieveAllProfilesAtPage(this.page).subscribe(data => {
      this.profiles = this.profiles.concat(data);
      if (data.length < 10) {
        this.atEnd = true;
      }
    });
  }

  resetOptions() {
    // Resets options
    this.options = this.allSkills;
  }

  termChanged(event) {
    // Watching for the typing match to see what to filter by
    this.options = this.allSkills.filter(el =>
      el.title.includes(event.target.value)
    );
  }

}
