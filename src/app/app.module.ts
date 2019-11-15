import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { InsideComponent } from './inside/inside.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { ProjectHubComponent } from './project-hub/project-hub.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { InterviewFormComponent } from './components/interview-form/interview-form.component';
import { LandingComponent } from './components/landing/landing.component';
=======


import { HomeComponent } from './home/home.component';
import { ProjectHubComponent } from './project-hub/project-hub.component';

>>>>>>> UserFeature


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    HomeComponent,
    InsideComponent,
    LoginComponent,
    LandingComponent,
    InsideComponent,
<<<<<<< HEAD
    ProjectHubComponent,
    JobFormComponent,
    ProfileFormComponent,
    InterviewFormComponent
=======
    ProjectHubComponent, 
>>>>>>> UserFeature
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
<<<<<<< HEAD
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
=======
    
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
      

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
>>>>>>> UserFeature
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
