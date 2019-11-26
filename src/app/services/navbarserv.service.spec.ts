import { TestBed } from '@angular/core/testing';

import { NavbarservService } from './navbarserv.service';
import { NavbarComponent } from '../components/navbar/navbar.component';

describe('NavbarservService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarservService = TestBed.get(NavbarservService);
    expect(service).toBeTruthy();
  });

  it('hide should hide NavBar', ()=>{
    const service: NavbarservService = TestBed.get(NavbarservService);
    service.hide();
    expect(service.visible).toBeFalsy();
  });

  it('show should reveal NavBar', ()=>{
    const service: NavbarservService = TestBed.get(NavbarservService);
    service.show();
    expect(service.visible).toBeTruthy();
  });

  it('toggle should change NavBar status from shown to hidden', ()=>{
    const service: NavbarservService = TestBed.get(NavbarservService);
    service.show();
    service.toggle();
    expect(service.visible).toBeFalsy();
  });

  it('toggle should change NavBar status from hidden to shown', ()=>{
    const service: NavbarservService = TestBed.get(NavbarservService);
    service.hide();
    service.toggle();
    expect(service.visible).toBeTruthy();
  });
});
