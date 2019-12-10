import { Skill } from "./skill";
import { Profile } from "./profile";

export class Job {
  constructor(
    public title: string = "",
    public description: string = "",
    public skills: Skill[] = [],
    public isFilled: boolean = false
  ) {}
}
