import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement, ElementRef } from '@angular/core';

import { SearchSelectComponent } from './search-select.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { SkillService } from 'src/app/skill.service';

describe('SearchSelectComponent', () => {
  let injector: TestBed;
  let component: SearchSelectComponent;
  let fixture: ComponentFixture<SearchSelectComponent>;
  let de: DebugElement;
  let skillService: SkillService;
  //let matOption: ElementRef; No longer in use 
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSelectComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpClientTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ SearchSelectComponent ],
    })
    injector = getTestBed();
    component = injector.get(SearchSelectComponent);
    httpMock = injector.get(HttpTestingController);
    skillService = injector.get(SkillService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  xit('should populate via ngOnInit', () => {

  });

  xdescribe('selectOption', () => {

  });

  xdescribe('termChanged', () => {

  });

  xdescribe('resetOptions', () => {

  });
});
