import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarComponent } from './../../calendar/calendar.component';
import { InterviewerListComponent } from './../../interviewer-list/interviewer-list.component';
import { InterviewCardComponent } from './../../cards/interview-card/interview-card.component';
import { InterviewService } from '../../interview-service/interview.service';
import { UserService } from 'src/app/user.service';
import { InterviewsComponent } from './interviews.component';

xdescribe('InterviewsComponent', () => {
  let component: InterviewsComponent;
  let fixture: ComponentFixture<InterviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewsComponent, CalendarComponent, InterviewerListComponent, InterviewCardComponent],
      imports: [  ],
      providers: [ InterviewService, UserService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
