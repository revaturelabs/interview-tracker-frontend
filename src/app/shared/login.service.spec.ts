import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';

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
    it('should return user information', () => {
      const user = {
        id: 3,
        firstName: "Frank",
        lastName: "Stein",
        password: "doctor",
        username: "mshelley"
      }
      
      loginService.getUserInfo(user).subscribe(res => {
        expect(res).toEqual(user);
      });
        const req = httpMock.expectOne('http://localhost:8765/user/login');
        expect(req.request.method).toBe('POST');
        req.flush(user);
    
    });
  });
});
