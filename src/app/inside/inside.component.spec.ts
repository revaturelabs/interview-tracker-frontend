import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideComponent } from './inside.component';

describe('InsideComponent', () => {
  let component: InsideComponent;
  let fixture: ComponentFixture<InsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
