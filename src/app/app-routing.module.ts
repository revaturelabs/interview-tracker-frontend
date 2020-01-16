import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateJobsComponent } from './create-jobs/create-jobs.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'profiles',
    component: ProfilesComponent
  },
  {
    path: 'interviews',
    component: InterviewsComponent
  },
  {
    path: 'createjob',
    component: CreateJobsComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
