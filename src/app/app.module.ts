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
=======
import { HttpClientModule } from '@angular/common/http';

>>>>>>> 191e156e46031e6612ac392a26453dec84fd3015

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
    BrowserAnimationsModule
=======
    FormsModule,
    HttpClientModule,
    AppRoutingModule
>>>>>>> 191e156e46031e6612ac392a26453dec84fd3015
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
