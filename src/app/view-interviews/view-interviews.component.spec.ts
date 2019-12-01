import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInterviewsComponent } from './view-interviews.component';
import { MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('ViewInterviewsComponent', () => {
  let component: ViewInterviewsComponent;
  let fixture: ComponentFixture<ViewInterviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInterviewsComponent ],
      imports: [MatCardModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
