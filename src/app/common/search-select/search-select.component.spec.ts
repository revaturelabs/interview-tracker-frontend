import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement, ElementRef } from '@angular/core';

import { SearchSelectComponent } from './search-select.component';

describe('SearchSelectComponent', () => {
  let component: SearchSelectComponent;
  let fixture: ComponentFixture<SearchSelectComponent>;
  let de: DebugElement;
  let matOption: ElementRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSelectComponent ],
      imports: [ FormsModule, ReactiveFormsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    matOption = de.query(By.css('mat-option'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should populate via ngOnInit', () => {

  });

  xdescribe('selectOption', () => {

  });

  xdescribe('termChanged', () => {

  });

  xdescribe('resetOptions', () => {

  });
});
