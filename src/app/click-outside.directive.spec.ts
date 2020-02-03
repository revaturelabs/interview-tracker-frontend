import { ClickOutsideDirective } from './click-outside.directive';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

let eleRef = new ElementRef(this); 

describe('ClickOutsideDirective', () => {
    beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }));
  it('should create an instance', () => {
    const directive = new ClickOutsideDirective(eleRef);
    expect(directive).toBeTruthy();
  });
});
