import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewFormComponent } from './interview-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatCardModule, MatCheckboxModule, MatSlideToggleModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from '../login/login.component';
import { ProjectHubComponent } from 'src/app/project-hub/project-hub.component';
import { JobFormComponent } from '../job-form/job-form.component';
import { LogoutComponent } from '../logout/logout.component';
import { ProfileFormComponent } from '../profile-form/profile-form.component';
import { ViewProfilesComponent } from 'src/app/view-profiles/view-profiles.component';
import { ViewJobsComponent } from 'src/app/view-jobs/view-jobs.component';
import { ViewInterviewsComponent } from 'src/app/view-interviews/view-interviews.component';
import { LandingComponent } from 'src/app/landing/landing.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { APP_BASE_HREF } from '@angular/common';

describe('InterviewFormComponent', () => {
  let component: InterviewFormComponent;
  let fixture: ComponentFixture<InterviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewFormComponent, LoginComponent, ProjectHubComponent, JobFormComponent, LogoutComponent, ProfileFormComponent, ViewProfilesComponent, ViewJobsComponent, ViewInterviewsComponent, LandingComponent ],
      imports: [FormsModule, MatAutocompleteModule, MatFormFieldModule, MatDatepickerModule, ReactiveFormsModule, MatNativeDateModule, HttpClientModule, MatInputModule, BrowserAnimationsModule, MatCardModule, MatSlideToggleModule, AppMaterialModule, MatCheckboxModule, HttpClientModule, AppRoutingModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
