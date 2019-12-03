import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHubComponent } from './project-hub.component';
import { NavbarservService } from '../services/navbarserv.service';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from '../components/login/login.component';
import { JobFormComponent } from '../components/job-form/job-form.component';
import { InterviewFormComponent } from '../components/interview-form/interview-form.component';
import { ProfileFormComponent } from '../components/profile-form/profile-form.component';
import { LogoutComponent } from '../components/logout/logout.component';
import { ViewInterviewsComponent } from '../view-interviews/view-interviews.component';
import { ViewJobsComponent } from '../view-jobs/view-jobs.component';
import { ViewProfilesComponent } from '../view-profiles/view-profiles.component';
import { LandingComponent } from '../landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { MatInputModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';


describe('ProjectHubComponent', () => {
  let component: ProjectHubComponent;
  let fixture: ComponentFixture<ProjectHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectHubComponent, LogoutComponent, LoginComponent, JobFormComponent, InterviewFormComponent, ProfileFormComponent, ViewInterviewsComponent, ViewJobsComponent, ViewProfilesComponent, LandingComponent ],
      imports: [AppRoutingModule, FormsModule, AppMaterialModule, MatInputModule, ReactiveFormsModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide the navbar', ()=>{
    let tester=new ProjectHubComponent(new NavbarservService, new ActivatedRoute);
    expect(tester.show).toBeFalsy();
  });

  // it('should show the navbar after toggle is called', ()=>{
  //   let tester=new ProjectHubComponent(new NavbarservService);
  //   tester.toggle();
  //   expect(tester.show).toBeTruthy();
  // });


});
