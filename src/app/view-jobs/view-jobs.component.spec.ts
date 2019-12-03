import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewJobsComponent } from "./view-jobs.component";
import {
  MatCardModule,
  MatSlideToggleModule,
  MatSlideToggle,
  MatInputModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { AppMaterialModule } from "../app-material.module";
import { FormsModule } from "@angular/forms";

describe("ViewJobsComponent", () => {
  let component: ViewJobsComponent;
  let fixture: ComponentFixture<ViewJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewJobsComponent],
      imports: [
        MatCardModule,
        HttpClientModule,
        MatSlideToggleModule,
        MatInputModule,
        AppMaterialModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should change event from open to filled", () => {
    class tester {
      checked: boolean;
      id: number;
      constructor(check: boolean, iden: number) {
        this.checked = check;
        this.id = iden;
      }
    }
    let event = new tester(true, 1);
    component.sliderChange(event);
    expect(component.slider).toBe("Job is filled");
    expect(component.id).toBe(1);
  });

  it("should change event from filled to open", () => {
    class tester {
      checked: boolean;
      constructor(check: boolean) {
        this.checked = check;
      }
    }
    let event = new tester(false);
    component.sliderChange(event);
    expect(component.slider).toBe("Job is open");
  });

  it("should return filtered result", () => {
   let test=component.filterS('Working test', 'work');
   expect(test).toBeTruthy();
  });

  it("should return nothing if filter doesn't match", () => {
    let test=component.filterS('Failing test', 'work');
    expect(test).toBeFalsy();
   });
});
