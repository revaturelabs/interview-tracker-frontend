import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JobService } from './job.service';
import { isEqual } from 'lodash/lang';

describe('JobService', () => {
  let injector: TestBed;
  let jobService: JobService;
  let httpMock: HttpTestingController;
  const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
  const data = 'There was an issue with the job service.';

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [JobService]
  });
  injector = getTestBed();
  jobService = injector.get(JobService);
  httpMock = injector.get(HttpTestingController); 
});

afterEach(() => {
  httpMock.verify();
});

  describe('getAllJobs', () => {
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      jobService.getAllJobs().subscribe(res => response = res, err => errResponse = err);
      let req = httpMock.expectOne('http://localhost:8765/interview-service/jobs');
      expect(req.request.method).toBe('GET');
      req.flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });

  describe('getAllJobAtPage', () => {
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      jobService.getAllJobAtPage(3).subscribe(res => response = res, err => errResponse = err);
      let req = httpMock.expectOne('http://localhost:8765/interview-service/jobs/3?filtertext=&skillids=');
      expect(req.request.method).toBe('GET');
      req.flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });

  describe('getByTitle', () => {
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      jobService.getByTitle('java').subscribe(res => response = res, err => errResponse = err);
      let req = httpMock.expectOne('http://localhost:8765/interview-service/jobs/title/java');
      expect(req.request.method).toBe('GET');
      req.flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });

  describe('getByTitlePaged', () => {
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      jobService.getByTitlePaged('java', 2).subscribe(res => response = res, err => errResponse = err);
      let req = httpMock.expectOne('http://localhost:8765/interview-service/jobs/title/java/2');
      expect(req.request.method).toBe('GET');
      req.flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });
});