import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { InsideComponent } from './inside/inside.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';


import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
<<<<<<< HEAD
=======
    AppComponent,
    LoginComponent,
    LandingComponent,
    HomeComponent,
    InsideComponent
>>>>>>> f6e6b9bd0e3b9e8cfdcfa899ca6b0a3f468c34b7

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppComponent,
    LoginComponent,
    LandingComponent,
    InsideComponent,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
