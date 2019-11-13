import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot()],
  exports: [RouterModule]
})

export class AppRoutingModule { }
