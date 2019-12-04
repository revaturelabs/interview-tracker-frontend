import { Skill } from "./skill";
import { Profile } from "./profile";

export class Job {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public skills: Skill[],
    public isFilled: boolean,
    public profiles: Profile[]
  ) {}
}
