import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { of } from 'rxjs';

describe('UserService', () => {
  let userService: UserService

  beforeEach(() => {
  
  TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers: [UserService]
  });
  userService = TestBed.get(UserService);
  });

  it('should be created', () => {
    // const service: UserService = TestBed.get(UserService);
    expect(userService).toBeTruthy();
  });
  describe('retrieveAllUsers', () =>{
    it('should return all users ', () => {
      const userResponse = [{
        id: 0,
        firstName: "Larry",
        lastName: "King",
        password: "",
        username: "lking"
      }];
      let response;
      spyOn(userService, 'retrieveAllUsers').and.returnValue(of(userResponse));

      userService.retrieveAllUsers().subscribe(res => {
        response = res;
      });
      expect(response).toEqual(userResponse);
    });
  });
});
