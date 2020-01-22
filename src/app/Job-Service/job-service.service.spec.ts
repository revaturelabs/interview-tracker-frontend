import { TestBed } from '@angular/core/testing';

import { JobServiceService } from './job-service.service';

describe('JobServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobServiceService = TestBed.get(JobServiceService);
    expect(service).toBeTruthy();
  });
});
