import { Skill } from "./skill";
import { Interview } from "./interview";

export class Profile {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public skills: Skill[],
    public interviews: Interview[],
    public description: string
  ) {}
}
