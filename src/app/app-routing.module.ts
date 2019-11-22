import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectHubComponent } from './project-hub/project-hub.component';
import { LogoutComponent } from './components/logout/logout.component';
import { InterviewFormComponent } from './components/interview-form/interview-form.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ViewProfilesComponent } from './view-profiles/view-profiles.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { ViewInterviewsComponent } from './view-interviews/view-interviews.component';



const routes: Routes = [
  // @Author: Ramses
  // Set up the paths setting the blank space as the first page, providing a gateway and sending the user to the log-in page
  // The ** wildcard has been used in order to send the user onto a error page in case the user tries to type in a path that
  // is either non existent, or the user is not currently allowed to access said feature.
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'hub', component: ProjectHubComponent },
  { path: 'create-job', component: JobFormComponent },
  { path: 'logout' , component: LogoutComponent },
  { path: 'create-profile', component: ProfileFormComponent },
  { path: 'create-interview', component: InterviewFormComponent },
  { path: 'view-profiles', component: ViewProfilesComponent },
  { path: 'view-jobs', component: ViewJobsComponent },
  { path: 'view-interviews', component: ViewInterviewsComponent },
  { path: '**', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
