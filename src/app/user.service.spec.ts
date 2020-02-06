import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { isEqual } from 'lodash/lang';

describe('UserService', () => {
  let injector: TestBed;
  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
  
  TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers: [UserService]
  });
  injector = getTestBed();
  userService = injector.get(UserService);
  httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
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
      },
      {
        id: 1,
        firstName: "Mary",
        lastName: "Queen",
        password: "secure",
        username: "mqueen"
      }
    ];

      userService.retrieveAllUsers().subscribe(res => {
        expect(res.length).toBe(2);
        expect(res).toEqual(userResponse);
      });

      const req = httpMock.expectOne('http://localhost:8765/interview-service/users/allusers');
      expect(req.request.method).toBe('GET');
      req.flush(userResponse);
    });

    it('should throw an http error', () => {
      let response: any;
      let errResponse: any;
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const data = 'There was an error getting all users.';
      userService.retrieveAllUsers().subscribe(res => response = res, err => errResponse = err);
      httpMock.expectOne('http://localhost:8765/interview-service/users/allusers').flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
    }); 
  });
});
