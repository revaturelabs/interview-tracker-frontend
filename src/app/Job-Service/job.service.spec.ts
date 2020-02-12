import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JobService } from './job.service';

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
  
});