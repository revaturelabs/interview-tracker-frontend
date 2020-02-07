import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Skill from './models/Skill';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})

export class SkillService {
  all() {
    throw new Error("Method not implemented.");
  }

  private allSkills: Skill[] = [];
  private profileSkills = new BehaviorSubject<Skill>(null);
  profileSkills$ = this.profileSkills.asObservable();

  private url1 = 'http://localhost:8765/interview-service/skills/allSkills';
  private url2 = 'http://localhost:8765/interview-service/skills/insertSkill';

  constructor(private http: HttpClient) { }

  retrieveAllSkills(): Observable<any> {
    return this.http.get<Skill[]>(this.url1, {}).pipe(map(this.extractData)).pipe(catchError(this.handleError));
  }
  private extractData(res: any){
    let body = res.json();
    return body || {}
  }

  private handleError(error: any){
    let errMsg: string;
    try{
        errMsg = JSON.parse(error._body);      
    } catch(e){
      errMsg = 'There was an error getting all skills.';
    }
    return Observable.throwError(errMsg);
  }

  saveSkills(skill: Skill) {
    return this.http.post<boolean>(this.url2, skill);
  }
}