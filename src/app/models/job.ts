import { Skill } from "./skill";
import { Profile } from "./profile";

export class Job {
  constructor(
    public id: number = 0,
    public title: string = "",
    public description: string = "",
    public skills: Skill[] = [],
    public filled: boolean = false
  ) {}
}
