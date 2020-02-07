import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Skill from './models/Skill';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SkillService {

  private allSkills: Skill[] = [];
  private profileSkills = new BehaviorSubject<Skill>(null);
  profileSkills$ = this.profileSkills.asObservable();

  public url1 = 'http://localhost:8765/interview-service/skills/allSkills';
  public url2 = 'http://localhost:8765/interview-service/skills/insertSkill';

  constructor(private http: HttpClient) { }

  retrieveAllSkills() {
    return this.http.get<Skill[]>(this.url1, {});
  }

  saveSkills() {
    return this.http.post<boolean>(this.url2, {});
  }



}
