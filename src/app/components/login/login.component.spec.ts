import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatFormFieldModule, MatCheckboxModule, MatAutocompleteModule, MatDatepickerModule, MatInputModule, MatSlideToggleModule } from '@angular/material';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProjectHubComponent } from 'src/app/project-hub/project-hub.component';
import { JobFormComponent } from '../job-form/job-form.component';
import { InterviewFormComponent } from '../interview-form/interview-form.component';
import { SkillsFormComponent } from '../skills-form/skills-form.component';
import { ProfileFormComponent } from '../profile-form/profile-form.component';
import { LandingComponent } from 'src/app/landing/landing.component';
import { LogoutComponent } from '../logout/logout.component';
import { ViewProfilesComponent } from 'src/app/view-profiles/view-profiles.component';
import { ViewJobsComponent } from 'src/app/view-jobs/view-jobs.component';
import { ViewInterviewsComponent } from 'src/app/view-interviews/view-interviews.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, ProjectHubComponent, JobFormComponent, InterviewFormComponent, SkillsFormComponent, ProfileFormComponent, LandingComponent, LogoutComponent, ViewProfilesComponent, ViewJobsComponent, ViewInterviewsComponent ],
      imports: [FormsModule, MatInputModule, HttpClientModule, MatCardModule, MatFormFieldModule, AppRoutingModule, MatCheckboxModule, MatAutocompleteModule, MatDatepickerModule, ReactiveFormsModule, BrowserAnimationsModule, MatSlideToggleModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
