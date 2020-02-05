import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerListComponent } from './interviewer-list.component';

xdescribe('InterviewerListComponent', () => {
  let component: InterviewerListComponent;
  let fixture: ComponentFixture<InterviewerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
