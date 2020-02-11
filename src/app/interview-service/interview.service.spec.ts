import { TestBed, getTestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InterviewService } from './interview.service';
import { isEqual } from 'lodash/lang';
import Interview from '../models/Interview';

describe('InterviewService', () => {
  let interviewService: InterviewService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
  const data = 'There was an issue with the interview service.';

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [InterviewService]
  });
  injector = getTestBed();
  interviewService = injector.get(InterviewService);
  httpMock = injector.get(HttpTestingController);

});

afterEach(() => {
  httpMock.verify();
});

  it('should be created', () => {
    expect(interviewService).toBeTruthy();
  });

  describe('retrieveAllInterviews', () => {
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      interviewService.retrieveAllInterviews().subscribe(res => response = res, err => errResponse = err);
      httpMock.expectOne('http://localhost:8765/interview-service/interviews/allInterviews').flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });

  describe('retrieveInterviewById', () => {
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      interviewService.retrieveInterviewById(2).subscribe(res => response = res, err => errResponse = err);
      httpMock.expectOne('http://localhost:8765/interview-service/interviews/id/' + 2).flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });

  describe('retrieveInterviewByJobId', () => {
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      interviewService.retrieveInterviewByJobId(-1).subscribe(res => response = res, err => errResponse = err);
      httpMock.expectOne('http://localhost:8765/interview-service/interviews/job/' + -1).flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });

  describe('saveInterview', () => {
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      interviewService.saveInterview(new Interview()).subscribe(res => response = res, err => errResponse = err);
      httpMock.expectOne('http://localhost:8765/interview-service/interviews/saveInterview').flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });
});
