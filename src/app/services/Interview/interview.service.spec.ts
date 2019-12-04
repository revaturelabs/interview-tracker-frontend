import { TestBed } from '@angular/core/testing';

import { InterviewService } from './interview.service';

describe('InterviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterviewService = TestBed.get(InterviewService);
    expect(service).toBeTruthy();
  });
});
