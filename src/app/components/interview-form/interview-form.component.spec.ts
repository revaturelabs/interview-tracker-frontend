import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewFormComponent } from './interview-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';

describe('InterviewFormComponent', () => {
  let component: InterviewFormComponent;
  let fixture: ComponentFixture<InterviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewFormComponent ],
      imports: [FormsModule, MatAutocompleteModule, MatFormFieldModule, MatDatepickerModule, ReactiveFormsModule, MatNativeDateModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
