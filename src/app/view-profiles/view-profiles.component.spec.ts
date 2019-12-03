import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfilesComponent } from './view-profiles.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material';
import { AppMaterialModule } from '../app-material.module';
import { FormsModule } from '@angular/forms';

describe('ViewProfilesComponent', () => {
  let component: ViewProfilesComponent;
  let fixture: ComponentFixture<ViewProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProfilesComponent ],
      imports: [MatCardModule, HttpClientModule, AppMaterialModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
