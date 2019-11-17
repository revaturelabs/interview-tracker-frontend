import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { InsideComponent } from './inside/inside.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';
import { HomeComponent } from './home/home.component';
import { ProjectHubComponent } from './project-hub/project-hub.component';
import { LogoutComponent } from './components/logout/logout.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { SkillsFormComponent } from './components/skills-form/skills-form.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    HomeComponent,
    InsideComponent,
    ProjectHubComponent,
    LogoutComponent,
    JobFormComponent,
    SkillsFormComponent,
    ProfileFormComponent,
    NavbarComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
