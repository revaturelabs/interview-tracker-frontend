import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHubComponent } from './project-hub.component';
import { NavbarservService } from '../services/navbarserv.service';

describe('ProjectHubComponent', () => {
  let component: ProjectHubComponent;
  let fixture: ComponentFixture<ProjectHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide the navbar', ()=>{
    let tester=new ProjectHubComponent(new NavbarservService);
    expect(tester.show).toBeFalsy();
  });

  // it('should show the navbar after toggle is called', ()=>{
  //   let tester=new ProjectHubComponent(new NavbarservService);
  //   tester.toggle();
  //   expect(tester.show).toBeTruthy();
  // });


});
