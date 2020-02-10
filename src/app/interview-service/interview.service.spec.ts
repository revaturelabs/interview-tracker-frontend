import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InterviewService } from './interview.service';

describe('InterviewService', () => {
let interviewService: InterviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [InterviewService]
  });
  interviewService =TestBed.get(InterviewService);
});

  it('should be created', () => {
    // const service: InterviewService = TestBed.get(InterviewService);
    expect(interviewService).toBeTruthy();
  });

  xit('should retrieve all interviews when calling retrieveAllInterviews', () => {

    interviewService.retrieveAllInterviews();
  });
});
