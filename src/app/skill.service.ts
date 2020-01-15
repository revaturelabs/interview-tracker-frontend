import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Skill from './models/Skill';

@Injectable({
  providedIn: 'root'
})

export class SkillService {

  private url1 = 'http://localhost:8765/interview-service/skills/allSkills';

  private url2 = 'http://localhost:8765/interview-service/skills/insertSkill';

  constructor(private http: HttpClient) { }

  retrieveAllSkills() {
    return this.http.get<Skill[]>(this.url1, {withCredentials: true});
  }

  saveSkills() {
    return this.http.post<boolean>(this.url2, {withCredentials: true});
  }



}
