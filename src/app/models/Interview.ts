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
  
  public constructor(init?: Partial<Interview>) {
    Object.assign(this, init);
  }
}
