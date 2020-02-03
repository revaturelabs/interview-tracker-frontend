import { SkillService } from 'src/app/skill.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs/internal/observable/of';
// import { SkillService } from './skill.service';

describe('SkillService', () => {
  let skillService: SkillService; //added for testing

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SkillService]
  });
  skillService = TestBed.get(SkillService);//added for testing 
});

  it('should be created', () => {
    // const service: SkillService = TestBed.get(SkillService);
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
      let response;
      spyOn(skillService, 'retrieveAllSkills').and.returnValue(of(skillResponse));

      skillService.retrieveAllSkills().subscribe(res => {
        response = res;
      });
      expect(response).toEqual(skillResponse);
    });

    describe('saveSkills',() => {
      it('should return true', () => {
        const testSkill = {
          id: 3,
          title: 'JavaScript'
        }
        let response;
        spyOn(skillService, 'saveSkills').and.returnValue(of(true));

        skillService.saveSkills(testSkill).subscribe(res => {
          response = res;
        });
        expect(response).toBe(true);
      });

    });
  });
  describe('saveSkills',() => {
    it('should return false', () => {
      const testSkill = {
        id: 3,
        title: 'JavaScript'
      }
      let response;
      spyOn(skillService, 'saveSkills').and.returnValue(of(false));

      skillService.saveSkills(testSkill).subscribe(res => {
        response = res;
      });
      expect(response).toBe(false);
    });
    
  });
});

