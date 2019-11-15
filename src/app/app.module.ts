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
import { NavbarComponent } from './components/navbar/navbar.component';
import { InterviewFormComponent } from './components/interview-form/interview-form.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';



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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
