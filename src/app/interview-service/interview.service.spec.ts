import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InterviewService } from './interview.service';

describe('InterviewService', () => {
  let service: InterviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InterviewService]
    });

    service = TestBed.get(InterviewService);
    spyOn(service, 'retrieveAllInterviews');
    spyOn(service, 'retrieveInterviewById');
    spyOn(service, 'retrieveInterviewByJobId');
    spyOn(service, 'saveInterview');
    spyOn(service, 'retrieveInterviewsByProfileId');
    spyOn(service, 'retrieveInterviewsByDate');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should retrieve all interviews when calling retrieveAllInterviews', () => {

    service.retrieveAllInterviews();
  });
});
