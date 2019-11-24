import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfilesComponent } from './view-profiles.component';

describe('ViewProfilesComponent', () => {
  let component: ViewProfilesComponent;
  let fixture: ComponentFixture<ViewProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProfilesComponent ]
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
