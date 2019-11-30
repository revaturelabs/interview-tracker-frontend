import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobsComponent } from './view-jobs.component';
import { MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('ViewJobsComponent', () => {
  let component: ViewJobsComponent;
  let fixture: ComponentFixture<ViewJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJobsComponent ],
      imports: [MatCardModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
