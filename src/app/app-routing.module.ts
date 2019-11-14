import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectHubComponent } from './project-hub/project-hub.component';
// Ramses, please make sure to route to the hub component upon login, and move your script from the index to the ts file. also, test our methods using jasmine
const routes: Routes = [
 
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'hub', component: ProjectHubComponent },
  { path: '**', component: LandingComponent  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }