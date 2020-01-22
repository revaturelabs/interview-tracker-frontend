import Skill from './Skill';

export default class Job {
    constructor(
      public id: number,
      public title: string,
      public description: string,
      public location: string,
      public isFilled: boolean,
      public skills: Skill[]
    ) {}
  }
