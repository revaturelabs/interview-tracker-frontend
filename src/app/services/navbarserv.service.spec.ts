import { TestBed } from '@angular/core/testing';

import { NavbarservService } from './navbarserv.service';

describe('NavbarservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarservService = TestBed.get(NavbarservService);
    expect(service).toBeTruthy();
  });
});
