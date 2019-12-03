import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFormComponent } from './job-form.component';
import { MatFormFieldModule, MatCheckboxModule, MatInputModule, MatCardModule, MatAutocompleteModule, MatDatepickerModule, MatSlideToggleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LogoutComponent } from '../logout/logout.component';
import { LoginComponent } from '../login/login.component';
import { ProjectHubComponent } from 'src/app/project-hub/project-hub.component';
import { ProfileFormComponent } from '../profile-form/profile-form.component';
import { InterviewFormComponent } from '../interview-form/interview-form.component';
import { SkillsFormComponent } from '../skills-form/skills-form.component';
import { ViewInterviewsComponent } from 'src/app/view-interviews/view-interviews.component';
import { ViewProfilesComponent } from 'src/app/view-profiles/view-profiles.component';
import { ViewJobsComponent } from 'src/app/view-jobs/view-jobs.component';
import { LandingComponent } from 'src/app/landing/landing.component';
import { APP_BASE_HREF } from '@angular/common';

describe('JobFormComponent', () => {
  let component: JobFormComponent;
  let fixture: ComponentFixture<JobFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobFormComponent, LoginComponent, ProjectHubComponent, LogoutComponent, ProfileFormComponent, InterviewFormComponent, SkillsFormComponent, ViewInterviewsComponent, ViewProfilesComponent, ViewJobsComponent, LandingComponent ],
      imports: [MatFormFieldModule, MatCheckboxModule, FormsModule, MatInputModule, BrowserAnimationsModule, MatCardModule, HttpClientModule, AppRoutingModule, MatAutocompleteModule, ReactiveFormsModule, MatDatepickerModule, MatSlideToggleModule ],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
