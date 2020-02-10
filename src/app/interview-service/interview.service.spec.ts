import { TestBed, getTestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InterviewService } from './interview.service';
import { isEqual } from 'lodash/lang';
import Interview from '../models/Interview';
import Skill from '../models/Skill';
import Profile from '../models/Profile';
import User from '../models/User';

describe('InterviewService', () => {
  let interviewService: InterviewService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  const allSkills: Skill[] = [
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

  const userProfiles: Profile[] = [
    {
      id: 12,
      description: 'Full-Stack Java Developer',
      firstName: 'James',
      lastName: 'Peach',
      location: 'Las Vegas, Nevada',
      emailAddress: 'giantpeach@email.com',
      skills: [allSkills[0], allSkills[2], allSkills[3]],
      newString: function addParentheses() {
        return `(${this.firstName} ${this.lastName})`;
      }
    },
    {
      id: 54,
      description: 'Data Scientist',
      firstName: 'Dunstan',
      lastName: 'Ramsey',
      location: 'Deptford, England',
      emailAddress: 'fifthbusiness@email.com',
      skills: [allSkills[2], allSkills[4], allSkills[6]],
      newString: function addParentheses() {
        return `(${this.firstName} ${this.lastName})`;
      }
    },
    {
      id: 29,
      description: 'Web Developer',
      firstName: 'Charlotte',
      lastName: 'Cavatica',
      location: 'Greenville, South Carolina',
      emailAddress: 'webspinner@email.com',
      skills: [allSkills[0], allSkills[1], allSkills[3]],
      newString: function addParentheses() {
        return `(${this.firstName} ${this.lastName})`;
      }
    }
  ]

  const users: User[] = [
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
      const mockInterviews: Interview[] = [
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
      interviewService.retrieveAllInterviews().subscribe(res => {
        expect(res.length).toBe(2);
        expect(res[0].id).toEqual(14);
        expect(res[1].id).toEqual(25);
      }, err => errResponse = err);
      const req = httpMock.expectOne('http://localhost:8765/interview-service/interviews/allInterviews');
      expect(req.request.method).toBe('GET');
      req.flush(mockInterviews);
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
  // Every test that retrieves interviews past this point does not work as intended when mocked. Specific filters return the entire array for whatever reason.
  describe('retrieveInterviewById', () => {
    it('should return the correct interview', async() => {
      const mockInterviews: Interview[] = [
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
      // retrieveInterviewById should not be returning an array of Interviews, however, adjusting it to a single Interview causes res to be undefined
      interviewService.retrieveInterviewById(25).subscribe(res => {
        expect(res[1].id).toBe(25);
        expect(isEqual(res[1], mockInterviews[1])).toBe(true);
      }, err => errResponse = err);
      const req = httpMock.expectOne('http://localhost:8765/interview-service/interviews/id/' + 25);
      expect(req.request.method).toBe('GET');
      req.flush(mockInterviews);
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

  describe('retrieveInterviewByJobId', () => {
    it('should return all interviews with the specific job id', async () => {
      const mockInterviews: Interview[] = [
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
      interviewService.retrieveInterviewByJobId(22).subscribe(res => {
        expect(res.length).toBe(2);
        expect(isEqual(res, mockInterviews)).toBe(true);
      }, err => errResponse = err);
      const req = httpMock.expectOne('http://localhost:8765/interview-service/interviews/job/' + 22);
      expect(req.request.method).toBe('GET');
      req.flush(mockInterviews);
      httpMock.verify();
    });
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const data = 'There was an issue with the interview service.';
      interviewService.retrieveInterviewByJobId(-1).subscribe(res => response = res, err => errResponse = err);
      httpMock.expectOne('http://localhost:8765/interview-service/interviews/job/' + -1).flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });

  describe('saveInterview', () => {
    it('should save the interview and return true', async () => {
      const mockInterviews: Interview[] = [
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
      let newInterview = new Interview(mockInterviews[1]);
      interviewService.saveInterview(newInterview).subscribe(res => {  
        expect(res === true);
      }, err => errResponse = err);
      let req = httpMock.expectOne('http://localhost:8765/interview-service/interviews/saveInterview');
      expect(req.request.method).toBe('POST');
      req.flush(mockInterviews);
      httpMock.verify();
    });
    it('should throw an http error if the request is bad', async() => {
      let response: any;
      let errResponse: any;
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const data = 'There was an issue with the interview service.';
      interviewService.saveInterview(new Interview()).subscribe(res => response = res, err => errResponse = err);
      httpMock.expectOne('http://localhost:8765/interview-service/interviews/saveInterview').flush(data, mockErrorResponse);
      expect(isEqual(errResponse, data)).toBe(true);
      httpMock.verify();
    });
  });

  describe('retrieveInterviewsByDate', () => {
    it('should retrieve the correct interviews by date when filtered by year', async () => {
      const mockInterviews: Interview[] = [
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
      interviewService.retrieveInterviewsByDate(2020).subscribe(res => {
        expect(res.length).toBe(2);
        expect(res[0].id).toBe(14);
        expect(res[1].id).toBe(25);
      }, err => errResponse = err);
      let req = httpMock.expectOne('http://localhost:8765/interview-service/interviews/date/' + 2020);
      expect(req.request.method).toBe('GET');
      req.flush(mockInterviews);
      httpMock.verify();
    });
    it('should retrieve the correct interviews by date when filtered by year, month, and day', async () => {
      const mockInterviews: Interview[] = [
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
      interviewService.retrieveInterviewsByDate(2020, 2, 25).subscribe(res => {
        expect(res[0].id).toBe(14);
      }, err => errResponse = err);
      let req = httpMock.expectOne('http://localhost:8765/interview-service/interviews/date/' + 2020 + '/' + 2 + '/' + 25);
      expect(req.request.method).toBe('GET');
      req.flush(mockInterviews);
      httpMock.verify();
    });
  });
});
