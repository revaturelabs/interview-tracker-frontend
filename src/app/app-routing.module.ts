import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { ProjectHubComponent } from './project-hub/project-hub.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Ramses, plese make sure to route to the hub compnent upon login, and move your script from the index to the ts file. also, test our methos using jasmine
const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }