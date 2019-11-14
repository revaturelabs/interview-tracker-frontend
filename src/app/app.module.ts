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
import { ProjectHubComponent } from './project-hub/project-hub.component';
import { SkillsFormComponent } from './components/skills-form/skills-form.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    InsideComponent,
    ProjectHubComponent,
    SkillsFormComponent, 
    LogoutComponent

  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AppMaterialModule
   
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
