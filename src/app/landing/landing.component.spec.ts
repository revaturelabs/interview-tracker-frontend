import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from '../components/login/login.component';
import { ProjectHubComponent } from '../project-hub/project-hub.component';
import { JobFormComponent } from '../components/job-form/job-form.component';
import { ProfileFormComponent } from '../components/profile-form/profile-form.component';
import { InterviewFormComponent } from '../components/interview-form/interview-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatCheckboxModule, MatAutocompleteModule, MatDatepickerModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent, LoginComponent, ProjectHubComponent, JobFormComponent, ProfileFormComponent, InterviewFormComponent ],
      imports: [AppRoutingModule, FormsModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatCheckboxModule, MatAutocompleteModule, MatDatepickerModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
