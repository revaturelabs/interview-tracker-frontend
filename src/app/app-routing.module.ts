import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';
import { LoginComponent } from './pages/login/login.component';
import { InterviewCreateComponent } from './interview-create/interview-create.component';

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
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
