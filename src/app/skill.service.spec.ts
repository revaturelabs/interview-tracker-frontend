import { SkillService } from 'src/app/skill.service';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { isEqual } from 'lodash/lang';

describe('SkillService', () => {
  let injector: TestBed;
  let skillService: SkillService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SkillService]
  });
  injector = getTestBed();
  skillService = injector.get(SkillService);
  httpMock = injector.get(HttpTestingController); 
});
afterEach(() => {
  httpMock.verify();
});

  it('should be created', () => {
    expect(skillService).toBeTruthy();
  });
  describe('retrieveAllSkills', () => {
    it('should return all skills', () => {
      const skillResponse = [
        {
          id: 1,
          title: 'Java'
        },
        {
          id:2,
          title:'CSS'
        },
        {
          id: 3,
          title: 'JavaScript'
        }
      ];
      let errResponse: any;
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const data = 'There was an error getting all skills.';
      skillService.retrieveAllSkills().subscribe(res => {
        expect(res.length).toBe(3);
       expect(res).toEqual(skillResponse);
      }, err => errResponse = err);
      
      const req = httpMock.expectOne('http://localhost:8765/interview-service/skills/allSkills');
      if(errResponse === undefined){
      expect(req.request.method).toBe('GET');
      req.flush(skillResponse);
      }else {
        expect(isEqual(data, mockErrorResponse)).toBe(true);
        req.flush(data, mockErrorResponse);
      }
      httpMock.verify();
    });

      it('should throw an http error', () => {
        let response: any;
        let errResponse: any;
        const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
        const data = 'There was an error getting all skills.';
        skillService.retrieveAllSkills().subscribe(res => response = res, err => errResponse = err);
        httpMock.expectOne('http://localhost:8765/interview-service/skills/allSkills').flush(data, mockErrorResponse);
        expect(isEqual(errResponse, data)).toBe(true);
        httpMock.verify();
      })
    });
  });