import { Component, OnInit } from "@angular/core";
import { NavbarservService } from "../../services/navbarserv.service";
import { NgForm, FormGroup, FormArray } from "@angular/forms";
import { Router } from "@angular/router";
import { Skill } from "src/app/models/skill";
import { ProfileService } from "src/app/services/Profile/profile.service";
import { SkillService } from "src/app/services/Skill/skill.service";
import { Profile } from "src/app/models/profile";

@Component({
  selector: "app-profile-form",
  templateUrl: "./profile-form.component.html",
  styleUrls: ["./profile-form.component.scss"]
})
export class ProfileFormComponent implements OnInit {
  allSkills: Skill[];
  skillsOption: Skill[] = [];

  constructor(
    public nav: NavbarservService,
    private profileService: ProfileService,
    private skillService: SkillService,
    private router: Router
  ) {}

  ngOnInit() {
    this.nav.show();

    this.getAllSkills();
  }

  submission(form: NgForm) {
    this.profileService
      .addProfiles(
        new Profile(
          0,
          form.value.firstName,
          form.value.lastName,
          this.skillsOption,
          form.value.description
        )
      )
      .subscribe(
        p => {
          console.log(p);
          this.router.navigateByUrl("/hub");
        },
        err => {
          console.log(err);
        }
      );
  }
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
    this.skillService.getAllSkills().subscribe(
      s => {
        this.allSkills = s;
      },
      err => {
        console.log(err);
      }
    );
  }
}
