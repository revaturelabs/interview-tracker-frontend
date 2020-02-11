import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JobService } from './job.service';

describe('JobService', () => {
  let jobService: JobService;

  beforeEach(() =>{
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [JobService] 
  });
  jobService = TestBed.get(JobService);
});

  it('should be created', () => {
    expect(jobService).toBeTruthy();
  });
});