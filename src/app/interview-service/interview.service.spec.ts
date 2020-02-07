import { TestBed, getTestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InterviewService } from './interview.service';
import { isEqual } from 'lodash/lang';

describe('InterviewService', () => {
  let interviewService: InterviewService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  const allSkills = [
    {
      id: 10,
      title: 'HTML'
    },
    {
      id: 15,
      title: 'Angular'
    },
    {
      id: 29,
      title: 'Java'
    },
    {
      id: 33,
      title: 'CSS'
    },
    {
      id: 5,
      title: 'PostgreSQL'
    },
    {
      id: 3,
      title: 'MySQL'
    },
    {
      id: 47,
      title: 'SQL Server Management Studio'
    }
  ];

  const userProfiles = [
    {
      id: 12,
      description: 'Full-Stack Java Developer',
      firstName: 'James',
      lastName: 'Peach',
      location: 'Las Vegas, Nevada',
      emailAddress: 'giantpeach@email.com',
      skills: [allSkills[0], allSkills[2], allSkills[3]]
    },
    {
      id: 54,
      description: 'Data Scientist',
      firstName: 'Dunstan',
      lastName: 'Ramsey',
      location: 'Deptford, England',
      emailAddress: 'fifthbusiness@email.com',
      skills: [allSkills[2], allSkills[4], allSkills[6]]
    },
    {
      id: 29,
      description: 'Web Developer',
      firstName: 'Charlotte',
      lastName: 'Cavatica',
      location: 'Greenville, South Carolina',
      emailAddress: 'webspinner@email.com',
      skills: [allSkills[0], allSkills[1], allSkills[3]]
    }
  ]

  const users = [
    {
      id: 5,
      firstName: 'Robert',
      lastName: 'High',
      password: 'health',
      username: 'rohigh'
    },
    {
      id: 7,
      firstName: 'Darl',
      lastName: 'Bundren',
      password: 'fire',
      username: 'dbundren'
    }
  ]

  const allJobs = [
    {
      id: 22,
      title: 'Full-Stack Web Developer',
      description: 'Build full stack applications',
      location: 'New Orleans, Louisiana',
      isFilled: false,
      skills: [allSkills[0], allSkills[3]]
    },
    {
      id: 4,
      title: 'Database Developer',
      description: 'Build and manage databases',
      location: 'Chicago, Illinois',
      isFilled: false,
      skills: [allSkills[0], allSkills[3]]

    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [InterviewService]
  });
  injector = getTestBed();
  interviewService = injector.get(InterviewService);
  httpMock = injector.get(HttpTestingController);

});

afterEach(() => {
  httpMock.verify();
});

  it('should be created', () => {
    expect(interviewService).toBeTruthy();
  });

  describe('retrieveAllInterviews', () => {
    it('should return all interviews', async() => {
      const mockInterviews = [
        {
          id: 14,
          profile: userProfiles[0],
          date: new Date(2020, 2, 25, 10, 30, 0, 0),
          isCompleted: false,
          job: allJobs[0],
          users: [users[0]]
        },
        {
          id: 25,
          profile: userProfiles[2],
          date: new Date(2020, 2, 15, 16, 15, 0, 0),
          isCompleted: false,
          job: allJobs[0],
          users: [users[1]]
        }
      ]
      let errResponse: any;
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const data = 'There was an issue with the interview service.';
      interviewService.retrieveAllInterviews().subscribe(res => {
        expect(res.length).toBe(2);
        expect(res[0].id).toEqual(14);
        expect(res[1].id).toEqual(25);
      }, err => errResponse = err);
      const req = httpMock.expectOne('http://localhost:8765/interview-service/interviews/allInterviews');
      if(errResponse === undefined){
        expect(req.request.method).toBe('GET');
        req.flush(mockInterviews);
      } else {
        expect(isEqual(data, mockErrorResponse)).toBe(true);
        req.flush(data, mockErrorResponse);
      }
      httpMock.verify();
    });
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const data = 'There was an issue with the interview service.';
      interviewService.retrieveAllInterviews().subscribe(res => response = res, err => errResponse = err);
      httpMock.expectOne('http://localhost:8765/interview-service/interviews/allInterviews').flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });

  describe('retrieveInterviewById', () => {
    it('should return the correct interview', async() => {
      const mockInterviews = [
        {
          id: 14,
          profile: userProfiles[0],
          date: new Date(2020, 2, 25, 10, 30, 0, 0),
          isCompleted: false,
          job: allJobs[0],
          users: [users[0]]
        },
        {
          id: 25,
          profile: userProfiles[2],
          date: new Date(2020, 2, 15, 16, 15, 0, 0),
          isCompleted: false,
          job: allJobs[0],
          users: [users[1]]
        }
      ]
      let errResponse: any;
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const data = 'There was an issue with the interview service.';
      interviewService.retrieveInterviewById(25).subscribe(res => {
        expect(res.id).toEqual(25);
        expect(res).toEqual(mockInterviews[1]);
      }, err => errResponse = err);
      const req = httpMock.expectOne('http://localhost:8765/interview-service/interviews/id/' + 25);
      if(errResponse === undefined){
        expect(req.request.method).toBe('GET');
        req.flush(mockInterviews);
      } else {
        expect(isEqual(data, mockErrorResponse)).toBe(true);
        req.flush(data, mockErrorResponse);
      }
      httpMock.verify();
    });
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const data = 'There was an issue with the interview service.';
      interviewService.retrieveInterviewById(2).subscribe(res => response = res, err => errResponse = err);
      httpMock.expectOne('http://localhost:8765/interview-service/interviews/id/' + 2).flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });
});
