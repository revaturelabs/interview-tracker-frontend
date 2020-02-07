import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MiniSearchbarComponent } from './mini-searchbar.component';
import { DebugElement, ElementRef } from '@angular/core';

describe('MiniSearchbarComponent', () => {
  let component: MiniSearchbarComponent;
  let fixture: ComponentFixture<MiniSearchbarComponent>;
  let de: DebugElement;
  let matIcon: ElementRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniSearchbarComponent ],
      imports: [ FormsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    matIcon = de.query(By.css('mat-icon'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('termChanged', () => {
    it('should emit when termChanged is called', () => {
      spyOn(component.searchTermChanged, 'emit');
      component.termChanged();
      expect(component.searchTermChanged.emit).toHaveBeenCalled();
    });

    it('should emit when clicked is performed', () =>{
      spyOn(component.searchTermChanged, 'emit');
      matIcon.nativeElement.click();
      expect(component.searchTermChanged.emit).toHaveBeenCalled();
    });
  });
});
