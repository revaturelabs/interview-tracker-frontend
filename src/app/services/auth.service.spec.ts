import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from '../components/login/login.component';
import { ProjectHubComponent } from '../project-hub/project-hub.component';
import { JobFormComponent } from '../components/job-form/job-form.component';
import { ProfileFormComponent } from '../components/profile-form/profile-form.component';
import { InterviewFormComponent } from '../components/interview-form/interview-form.component';
import { LandingComponent } from '../landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatCheckboxModule, MatOptionModule, MatAutocompleteModule, MatDatepickerModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [LoginComponent, ProjectHubComponent, JobFormComponent, ProfileFormComponent, InterviewFormComponent, LandingComponent],
    imports: [HttpClientModule, AppRoutingModule, FormsModule, MatCardModule, MatFormFieldModule, MatCheckboxModule, MatOptionModule, MatAutocompleteModule, MatDatepickerModule, ReactiveFormsModule],
    providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
