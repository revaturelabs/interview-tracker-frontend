import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoutComponent } from './logout.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from '../login/login.component';
import { ProjectHubComponent } from 'src/app/project-hub/project-hub.component';
import { JobFormComponent } from '../job-form/job-form.component';
import { ProfileFormComponent } from '../profile-form/profile-form.component';
import { InterviewFormComponent } from '../interview-form/interview-form.component';
import { LandingComponent } from 'src/app/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatCheckboxModule, MatAutocompleteModule, MatDatepickerModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { ViewJobsComponent } from 'src/app/view-jobs/view-jobs.component';
import { ViewProfilesComponent } from 'src/app/view-profiles/view-profiles.component';
import { ViewInterviewsComponent } from 'src/app/view-interviews/view-interviews.component';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutComponent, LoginComponent, ViewJobsComponent, ViewProfilesComponent, ViewInterviewsComponent, ProjectHubComponent, JobFormComponent, ProfileFormComponent, InterviewFormComponent, LandingComponent ],
      imports: [HttpClientModule, AppRoutingModule, FormsModule, MatCardModule, MatFormFieldModule, MatCheckboxModule, MatAutocompleteModule, MatDatepickerModule, ReactiveFormsModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
