import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSearchbarComponent } from './mini-searchbar.component';

xdescribe('MiniSearchbarComponent', () => {
  let component: MiniSearchbarComponent;
  let fixture: ComponentFixture<MiniSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
