import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule, MatFormFieldModule, MatCheckboxModule, MatOptionModule, MatAutocompleteModule, MatDatepickerModule } from '@angular/material';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from '../login/login.component';
import { ProjectHubComponent } from 'src/app/project-hub/project-hub.component';
import { JobFormComponent } from '../job-form/job-form.component';
import { InterviewFormComponent } from '../interview-form/interview-form.component';
import { ProfileFormComponent } from '../profile-form/profile-form.component';
import { LandingComponent } from 'src/app/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SidenavComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent, LoginComponent, ProjectHubComponent, JobFormComponent, InterviewFormComponent, ProfileFormComponent, LandingComponent ],
      imports: [BrowserAnimationsModule,MatToolbarModule, AppRoutingModule, MatSidenavModule, MatFormFieldModule, MatListModule, MatCardModule, FormsModule, MatCheckboxModule, MatOptionModule, MatAutocompleteModule, MatDatepickerModule, ReactiveFormsModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
