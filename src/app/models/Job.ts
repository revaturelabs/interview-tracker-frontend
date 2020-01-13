import Skill from './Skill';

export default class Job {
    constructor(
      public jobId: number,
      public jobTitle: string,
      public jobDesc: string,
      public jobLoc: string,
      public jobFilled: boolean,
      public jobSkillIdsList: Skill[]
    ) {}
  }
