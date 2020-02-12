import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProfileService } from './profile.service';
import { isEqual } from 'lodash/lang';

describe('ProfileService', () => {
  let profileService: ProfileService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
  const data = 'There was an issue with the profile service.';
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ProfileService]
  });
    injector = getTestBed();
    profileService = injector.get(ProfileService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });

  describe('retrieveSomeProfiles', () => {
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      profileService.retrieveSomeProfiles().subscribe(res => response = res, err => errResponse = err);
      let req = httpMock.expectOne('http://localhost:8765/interview-service/profiles/1');
      expect(req.request.method).toBe('GET');
      req.flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });

  describe('retrieveAllProfiles', () => {
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      profileService.retrieveAllProfiles().subscribe(res => response = res, err => errResponse = err);
      let req = httpMock.expectOne('http://localhost:8765/interview-service/profiles');
      expect(req.request.method).toBe('GET');
      req.flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });

  describe('retrieveAllProfilesAtPage', () => {
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      profileService.retrieveAllProfilesAtPage(2).subscribe(res => response = res, err => errResponse = err);
      let req = httpMock.expectOne('http://localhost:8765/interview-service/profiles/2?filtertext=&skillids=');
      expect(req.request.method).toBe('GET');
      req.flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });
});
