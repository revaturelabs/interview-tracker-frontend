import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';
import { HomeComponent } from './home/home.component';
import { ProjectHubComponent } from './project-hub/project-hub.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { InterviewFormComponent } from './components/interview-form/interview-form.component';
import { LandingComponent } from './components/landing/landing.component';


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
    ProjectHubComponent,
    JobFormComponent,
    ProfileFormComponent,
    InterviewFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
