import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Skill from './models/Skill';

@Injectable({
  providedIn: 'root'
})

export class SkillService {

  constructor(private http: HttpClient) { }
  retrieveAllSkills() {
    const url = "http://localhost:8765/interview-service/skills/allSkills";
    return this.http.get<Skill[]>(url, {});
  }

}
