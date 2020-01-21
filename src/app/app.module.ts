import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';
import { MiniSearchbarComponent } from './common/mini-searchbar/mini-searchbar.component';
import { JobCardComponent } from './cards/job-card/job-card.component';
import { ProfileCardComponent } from './cards/profile-card/profile-card.component';
import { FabComponent } from './common/fab/fab.component';
import { JobModalComponent } from './pages/jobs/job-modal/job-modal.component';
import { ProfileModalComponent } from './pages/profiles/profile-modal/profile-modal.component';
import { CreateJobsComponent } from './create-jobs/create-jobs.component';
import { InterviewCardComponent } from './cards/interview-card/interview-card.component';
import { CalendarComponent } from './calendar/calendar.component';
import { InterviewerListComponent } from './interviewer-list/interviewer-list.component';
import { InterviewCreateComponent } from './interview-create/interview-create.component';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MultiSelectComponent } from './common/multi-select/multi-select.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from '@angular/material';
import { SearchSelectComponent } from './common/search-select/search-select.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    JobsComponent,
    ProfilesComponent,
    InterviewsComponent,
    MiniSearchbarComponent,
    JobCardComponent,
    ProfileCardComponent,
    FabComponent,
    JobModalComponent,
    ProfileModalComponent,
    CreateJobsComponent,
    InterviewCardComponent,
    CalendarComponent,
    InterviewerListComponent,
    InterviewCreateComponent,
    ProfileCreateComponent,
    MultiSelectComponent,
    SearchSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule, // for FullCalendar!
    HttpClientModule,
    MatSnackBarModule,
    NgxMatSelectSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
