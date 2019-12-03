import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewProfilesComponent } from "./view-profiles.component";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material";
import { AppMaterialModule } from "../app-material.module";
import { FormsModule } from "@angular/forms";

describe("ViewProfilesComponent", () => {
  let component: ViewProfilesComponent;
  let fixture: ComponentFixture<ViewProfilesComponent>;

  class skill {
    title: string;
    constructor(name: string) {
      this.title = name;
    }
  }
  class tester {
    firstName: string;
    lastName: string;
    skills: skill[];
    constructor(fnames: string, lname: string, skill: skill[]) {
      this.firstName = fnames;
      this.lastName = lname;
      this.skills = skill;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProfilesComponent],
      imports: [MatCardModule, HttpClientModule, AppMaterialModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should filter profiles by name", () => {
    let trial = new tester("Dummy", "Test", [new skill('test'), new skill('skills')]);
    expect(component.filterS(trial, "dum")).toBeTruthy();
  });

  it("should not return results that dont meet the feature", () => {
    let trial = new tester("Dummy", "Test", [new skill('test'), new skill('skills')]);
    expect(component.filterS(trial, "fail")).toBeFalsy();
  });

  it("should not return skill results that dont meet the feature", () => {
    let trial = new tester("Dummy", "Test", [new skill('test'), new skill('skills')]);
    component.opinions = "bySkills";
    expect(component.filterS(trial, "fail")).toBeFalsy();
  });

  it("should filter by skills", () => {
    let trial = new tester("Dummy", "Test", [new skill('test'), new skill('skills')]);
    component.opinions = "bySkills";
    expect(component.filterS(trial, "ski")).toBeTruthy();
  });
});
