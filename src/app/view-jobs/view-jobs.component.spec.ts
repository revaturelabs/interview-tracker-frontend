import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobsComponent } from './view-jobs.component';
import { MatCardModule, MatSlideToggleModule, MatSlideToggle } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('ViewJobsComponent', () => {
  let component: ViewJobsComponent;
  let fixture: ComponentFixture<ViewJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJobsComponent ],
      imports: [MatCardModule, HttpClientModule, MatSlideToggleModule]
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

  it('should change event from open to filled', ()=>{
    class tester{
      checked: boolean;
      constructor(
      check: boolean
      ){
        this.checked=check;
      }
    }
    let event=new tester(true);   
    component.sliderChange(event);
    expect(component.slider).toBe('Job is filled');
  });

  it('should change event from filled to open', ()=>{
    class tester{
      checked: boolean;
      constructor(
      check: boolean
      ){
        this.checked=check;
      }
    }
    let event=new tester(false);   
    component.sliderChange(event);
    expect(component.slider).toBe('Job is open');
  });
});
