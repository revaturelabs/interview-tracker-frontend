import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JobService } from './job.service';
import { of } from 'rxjs/internal/observable/of';

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
  describe('getAllJobs', () => {
    it('it should return all jobs', () => {
      const jobResponse =[
        {id: 1,
        title: "Developer",
        description: "test",
        location: "Chicago",
        isFilled: true,
        skills: []
        }];
      let response;
      spyOn(jobService, 'getAllJobs').and.returnValue(of(jobResponse));

      jobService.getAllJobs().subscribe(res => {
        response = res;
      });
      expect(response).toEqual(jobResponse);
    });

  });
});

// describe('getByTitle', () => {
//   it('should return a job by title', () => {
//     const titleResponse =[
//     {id: 0,
//     title: "Tester",
//     description: "",
//     location: "",
//     isFIlled: true,
//     skills: []
//     }];
//     let response;
//     spyOn(jobService, 'getByTitle').and.returnValue(of(titleResponse));
//     jobService.getByTitle("Tester").subscribe(res => {
//       response = res;
//     });
//     expect(response).toEqual(titleResponse);
//   });
// })