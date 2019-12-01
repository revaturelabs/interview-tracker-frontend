import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ProjectHubComponent } from './project-hub/project-hub.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { InterviewFormComponent } from './components/interview-form/interview-form.component';
import { ViewProfilesComponent } from './view-profiles/view-profiles.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { ViewInterviewsComponent } from './view-interviews/view-interviews.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatCheckboxModule, MatAutocompleteModule, MatSlideToggleModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, {provide: APP_BASE_HREF, useValue : '/' }],
      imports: [AppRoutingModule, FormsModule, MatCardModule, MatFormFieldModule, MatCheckboxModule, MatAutocompleteModule, ReactiveFormsModule, MatSlideToggleModule, HttpClientModule],
      declarations: [LoginComponent, ProjectHubComponent, JobFormComponent, LogoutComponent, ProfileFormComponent, InterviewFormComponent, ViewProfilesComponent, ViewJobsComponent, ViewInterviewsComponent, LandingComponent]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
