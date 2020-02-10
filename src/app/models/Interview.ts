import Job from './Job';
import User from './User';
import Profile from './Profile';

export default class Interview {
    id: number;
    profile: Profile;
    date: Date;
    isCompleted: boolean;
    job: Job;
    users: User[];
  // constructor(
  //   public id: number,
  //   public profile: Profile,
  //   public date: Date,
  //   public isCompleted: boolean,
  //   public job: Job,
  //   public users: User[] //This will be the list of interviewers
  // ) {}

  public constructor(init?: Partial<Interview>) {
    Object.assign(this, init);
}
}
