import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsFormComponent } from './skills-form.component';
import { MatFormFieldModule, MatCardModule, MatInputModule } from '@angular/material';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SkillsFormComponent', () => {
  let component: SkillsFormComponent;
  let fixture: ComponentFixture<SkillsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsFormComponent ],
      imports: [MatFormFieldModule, MatCardModule, TextFieldModule, ReactiveFormsModule, FormsModule, MatInputModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
