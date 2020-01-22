import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';
import { LoginComponent } from './pages/login/login.component';
import { InterviewCreateComponent } from './interview-create/interview-create.component';
import { CreateJobsComponent } from './create-jobs/create-jobs.component';
import { ProfileCreateComponent } from './profile-create/profile-create.component';

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
  path: 'createinterview',
  component: InterviewCreateComponent
},
    {
    path: 'create-jobs',
    component: CreateJobsComponent
  },
  {
    path: 'profile-create',
    component: ProfileCreateComponent
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
