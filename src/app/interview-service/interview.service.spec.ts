import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InterviewService } from './interview.service';
import { profile } from 'console';
import Profile from '../models/Profile';
import Job from '../models/Job';
import { of } from 'rxjs/internal/observable/of';

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
  describe('retrieveInterviewById', () => {
    it('it should return the interview by an Id', () => {
      const interviewResponse =[{
          id: 0,
          profile: Profile,
          date: Date,
          isCompleted: true,
          job: Job,
          users: []
      }];
        // let response;
        // spyOn(interviewService, 'retrieveInterviewById').and.returnValue(of());

        // interviewService.retrieveInterviewById(0).subscribe(res => {
        //   response = res;
        // });
        // expect(response).toEqual(interviewResponse);
    });
  });
});
