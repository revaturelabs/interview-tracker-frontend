import Skill from './Skill';

export default class Profile {
  constructor(
    public id: number,
    public description: string,
    public firstName: string,
    public lastName: string,
    public location: string,
    public emailAddress: string,
    public skills: Skill[]
  ) {}

 newString = function addParentheses() {
    return `(${this.firstName} ${this.lastName})`;
  };
}
