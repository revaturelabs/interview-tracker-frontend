import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InterviewService } from './interview.service';

describe('InterviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]}));

  it('should be created', () => {
    const service: InterviewService = TestBed.get(InterviewService);
    expect(service).toBeTruthy();
  });
});
