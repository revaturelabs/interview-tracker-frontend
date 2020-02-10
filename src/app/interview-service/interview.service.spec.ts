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
});
