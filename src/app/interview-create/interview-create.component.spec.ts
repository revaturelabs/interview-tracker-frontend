import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCreateComponent } from './interview-create.component';

xdescribe('InterviewCreateComponent', () => {
  let component: InterviewCreateComponent;
  let fixture: ComponentFixture<InterviewCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
