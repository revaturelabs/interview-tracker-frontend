import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { NavbarservService } from '../../services/navbarserv.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})


export class JobFormComponent implements OnInit {
  skill: any;
  skills: any[] = [];

  constructor( public nav: NavbarservService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.nav.show();

    this.http.get(environment.main_url + 'skills/allSkills').toPromise().then(r => {
      this.skill = r;
    });
  }
  submission(form: NgForm) {
    this.http.post(environment.main_url + 'jobs/saveJob', {
      title: form.value.title,
      description: form.value.description,
      skills: this.skills
    })
    .toPromise()
    .then((r: {title: string; description: string; skills: any}) => {
      console.log(r);
      this.router.navigateByUrl('/hub');
    })
    .catch(e => console.log(e));
  }

  /** @Author Lyssa Tupy, William Liederer
   * @params event
   * Method for mat-checkboxes, if the checkbox is checked the skill id and title are puhsed to
   * this.skills. If box is then unchecked it removes that skill using splice and the index of the skill.
   */
    getCheckboxes(event) {
    if (event.checked === true) {
    this.skills.push({id : event.source.id, title: event.source.name});
    }
    if (event.checked === false) {
      this.skills.splice(this.skills.indexOf({id: event.source.id}) - 1, 1);
    }
    }
}
