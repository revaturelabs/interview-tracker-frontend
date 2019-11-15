import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './landing/landing.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
>>>>>>> d23914c5dd2883827f6347a661ceb4eabed8e972
import { ProjectHubComponent } from './project-hub/project-hub.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
<<<<<<< HEAD
import { InterviewFormComponent } from './components/interview-form/interview-form.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
=======
>>>>>>> d23914c5dd2883827f6347a661ceb4eabed8e972

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'hub', component: ProjectHubComponent },
  { path: 'create-job', component: JobFormComponent },
  { path: 'create-account', component: ProfileFormComponent },
  { path: 'create-interview', component: InterviewFormComponent },
  { path: '**', component: LandingComponent }
  
  
 // {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }