import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JobService } from './job.service';

describe('JobService', () => {
  let jobService: JobService; // added for testing

  beforeEach(() =>{
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [JobService] 
  });
  jobService = TestBed.get(JobService); //added for testing
});

  it('should be created', () => {
    // const service: JobService = TestBed.get(JobService);
    expect(jobService).toBeTruthy();
  });
});