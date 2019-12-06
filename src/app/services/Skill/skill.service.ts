import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from 'src/app/models/skill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  getAllSkills() {
    return this.http.get<Skill[]>(environment.main_url + "skills/allSkills");
  }
}
