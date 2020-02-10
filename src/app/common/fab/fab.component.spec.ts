import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { FabComponent } from './fab.component';

describe('FabComponent', () => {
  let component: FabComponent;
  let fixture: ComponentFixture<FabComponent>;
  // class MockRouterService {
  //   navigate() { }
  // }
  // const mockRouterService = new MockRouterService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabComponent ],
      // providers: [ {provide: Router, useValue: mockRouterService} ],
      imports: [ RouterTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call activate and activated should be true', () => {
    component.activate();
    expect(component.activated).toBe(true);
  });

  xit('should reroute to create-jobs', () => {

  });

  xit('should reroute to profile-create', () => {

  });
});
