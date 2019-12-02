import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error-interceptor';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
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

describe('ErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[LoginComponent, ProjectHubComponent, JobFormComponent, LogoutComponent, ProfileFormComponent, InterviewFormComponent, ViewProfilesComponent, ViewJobsComponent, ViewInterviewsComponent, LandingComponent],
    imports:[HttpClientModule, AppRoutingModule, FormsModule, MatCardModule, MatFormFieldModule, MatCheckboxModule, ReactiveFormsModule, MatAutocompleteModule, MatSlideToggleModule]
  }));
  it('should create an instance', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(new ErrorInterceptor(service)).toBeTruthy();
  });
});
