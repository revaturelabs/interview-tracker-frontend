import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NgForm,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl
} from "@angular/forms";
import { NavbarservService } from "../../services/navbarserv.service";
import { Router } from "@angular/router";
import { Job } from "src/app/models/job";
import { JobService } from "src/app/services/Job/job.service";
import { Skill } from "src/app/models/skill";
import { SkillService } from "src/app/services/Skill/skill.service";

@Component({
  selector: "app-job-form",
  templateUrl: "./job-form.component.html",
  styleUrls: ["./job-form.component.scss"]
})
export class JobFormComponent implements OnInit {
  allSkills: Skill[];
  skillsOption: Skill[] = [];
  constructor(
    public nav: NavbarservService,
    private router: Router,
    private jobService: JobService,
    private skillService: SkillService
  ) {}

  ngOnInit() {
    this.nav.show();

    this.getAllSkills();
  }
  submission(form: NgForm) {
    this.jobService
      .addJob(
        new Job(0, form.value.title, form.value.description, this.skillsOption)
      )
      .subscribe(
        j => {
          this.router.navigateByUrl("/hub");
        },
        err => console.log(err)
      );
  }

  /** @Author Lyssa Tupy, William Liederer
   * @params event
   * Method for mat-checkboxes, if the checkbox is checked the skill id and title are puhsed to
   * this.skills. If box is then unchecked it removes that skill using splice and the index of the skill.
   */
  getCheckboxes(event) {
    if (event.checked === true) {
      this.skillsOption.push({ id: event.source.id, title: event.source.name });
    }
    if (event.checked === false) {
      this.skillsOption.splice(
        this.skillsOption.indexOf({
          id: event.source.id,
          title: event.source.name
        }) - 1,
        1
      );
    }
  }

  getAllSkills() {
    this.skillService.getAllSkills().subscribe(s => {
      this.allSkills = s;
    });
  }
}
