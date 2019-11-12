import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './landing/landing.component';


const secondaryRoutes: Routes = [
  { path: '',  component: LandingComponent},
  {  path: 'log-in',  component: LoginComponent },
  { path: 'inside',  component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(secondaryRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
