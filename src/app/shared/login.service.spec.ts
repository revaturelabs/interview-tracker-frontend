import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { isEqual } from 'lodash/lang';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';


describe('LoginService', () => {
  let injector: TestBed;
  let loginService: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [LoginService]
  });
    injector = getTestBed();
    loginService = injector.get(LoginService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  describe('getUserInfo', () => {
    it('should return user information', async() => {
      const user = {
        id: 3,
        firstName: "Frank",
        lastName: "Stein",
        password: "doctor",
        username: "mshelley"
      }
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const data = 'There was an error logging in.';
      let errResponse: any;
      loginService.getUserInfo(user).subscribe(res => {
        expect(res).toEqual(user);
      }, err => errResponse = err);
        const req = httpMock.expectOne('http://localhost:8765/user/login');
        //req.flush(data, mockErrorResponse);
        if(errResponse === undefined){
          expect(req.request.method).toBe('POST');
          req.flush(user);
        } else {
          expect(isEqual(data, errResponse)).toBe(true);
          req.flush(data, errResponse);
        }
        httpMock.verify();
    });
    it('should fail when a user does not exist for that login attempt', async() => {
        const user = {
          id: 4,
          firstName: "Daniel",
          lastName: "Harmon",
          password: "director",
          username: "dnd"
        }
        const login = {
          id: 3,
          firstName: "Frank",
          lastName: "Stein",
          password: "doctor",
          username: "mshelley"
        }
        let response: any;
        let errResponse: any;
        const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
        const data = 'There was an error logging in.';
        loginService.getUserInfo(login).subscribe(res => response = res, err => errResponse = err);
        httpMock.expectOne('http://localhost:8765/user/login').flush(data, mockErrorResponse);
        expect(isEqual(errResponse, data)).toBe(true);
        httpMock.verify();
    });
  });
});
