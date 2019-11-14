import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHubComponent } from './project-hub.component';

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
});
