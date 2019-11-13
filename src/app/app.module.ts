import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { InsideComponent } from './inside/inside.component';
import { HttpClientModule } from '@angular/common/http';

=======
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { InsideComponent } from './inside/inside.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';


import { HomeComponent } from './home/home.component';

>>>>>>> c6ea8b9da964fb6dabb9b597b998c3661c20a9a1


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    InsideComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
=======
    FormsModule,
    HttpClientModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HomeComponent,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
>>>>>>> c6ea8b9da964fb6dabb9b597b998c3661c20a9a1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
