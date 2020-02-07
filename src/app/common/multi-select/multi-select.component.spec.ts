import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MultiSelectComponent } from './multi-select.component';
import { DebugElement, ElementRef } from '@angular/core';

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;
  let de: DebugElement;
  let matOption: ElementRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    matOption = de.query(By.css('mat-option'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('sendSelections()', ()=> {
    it('should emit when sendSelection is called', () => {
      spyOn(component.emitSelections, 'emit');
      component.sendSelections();
      expect(component.emitSelections.emit).toHaveBeenCalled();
    });

    xit('should emit when click is performed', () => {
      spyOn(component.emitSelections, 'emit');
      matOption.nativeElement.click();
      expect(component.emitSelections.emit).toHaveBeenCalled();
    });
  });
});
