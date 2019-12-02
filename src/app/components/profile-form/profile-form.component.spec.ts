import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormComponent } from './profile-form.component';
import { MatFormFieldModule, MatCheckboxModule, MatInputModule, MatCardModule, MatAutocompleteModule, MatDatepickerModule, MatSlideToggleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from '../login/login.component';
import { ProjectHubComponent } from 'src/app/project-hub/project-hub.component';
import { JobFormComponent } from '../job-form/job-form.component';
import { LogoutComponent } from '../logout/logout.component';
import { InterviewFormComponent } from '../interview-form/interview-form.component';
import { ViewInterviewsComponent } from 'src/app/view-interviews/view-interviews.component';
import { ViewProfilesComponent } from 'src/app/view-profiles/view-profiles.component';
import { ViewJobsComponent } from 'src/app/view-jobs/view-jobs.component';
import { LandingComponent } from 'src/app/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

describe('ProfileFormComponent', () => {
  let component: ProfileFormComponent;
  let fixture: ComponentFixture<ProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFormComponent, LoginComponent, ProjectHubComponent, JobFormComponent, LogoutComponent, InterviewFormComponent, ViewInterviewsComponent, ViewProfilesComponent, ViewJobsComponent, LandingComponent ],
      imports: [MatFormFieldModule, MatCardModule, HttpClientModule, AppRoutingModule, MatCheckboxModule, MatInputModule, BrowserAnimationsModule, FormsModule, MatAutocompleteModule, MatDatepickerModule, ReactiveFormsModule, MatSlideToggleModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
