import { Component, OnInit } from "@angular/core";
import { NavbarservService } from "../../services/navbarserv.service";
import { SkillService } from "src/app/services/Skill/skill.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Skill } from "src/app/models/skill";

@Component({
  selector: "app-skills-form",
  templateUrl: "./skills-form.component.html",
  styleUrls: ["./skills-form.component.scss"]
})
export class SkillsFormComponent implements OnInit {
  constructor(
    public nav: NavbarservService,
    private skillService: SkillService,
    private router: Router
  ) {}
  ngOnInit() {
    this.nav.show();
  }
  submission(form: NgForm) {
    this.skillService.addSkill(new Skill(0, form.value.title)).subscribe(
      s => {
        this.router.navigateByUrl("/hub");
      },
      err => {
        console.log(err);
      }
    );
  }
}
