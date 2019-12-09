import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Skill } from "src/app/models/skill";

@Injectable({
  providedIn: "root"
})
export class SkillService {
  constructor(private http: HttpClient) {}

  getAllSkills() {
    return this.http.get<Skill[]>(environment.main_url + "skills/allSkills");
  }
}
