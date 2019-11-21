import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { InsideComponent } from './inside/inside.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';
import { ProjectHubComponent } from './project-hub/project-hub.component';
import { SkillsFormComponent } from './components/skills-form/skills-form.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InterviewFormComponent } from './components/interview-form/interview-form.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { NavbarservService } from './services/navbarserv.service';
import { ViewProfilesComponent } from './view-profiles/view-profiles.component';
import { ViewInterviewsComponent } from './view-interviews/view-interviews.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    InsideComponent,
    LoginComponent,
    LandingComponent,
    InsideComponent,
    ProjectHubComponent,
    NavbarComponent,
    InterviewFormComponent,
    JobFormComponent,
    ProfileFormComponent,
    SkillsFormComponent, 
    LogoutComponent,
     ViewProfilesComponent, 
     ViewInterviewsComponent, 
     ViewJobsComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppMaterialModule
   
  ],
  providers: [AuthService,
              NavbarservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
