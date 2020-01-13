import Job from './Job';
import User from './User';
import Profile from './Profile';

export default class Interview {
  constructor(
    public interviewId: number,
    public interviewDate: Date,
    public interviewCompleted: boolean,
    public interviewJobId: Job,
    public interviewProfileId: Profile,
    public usersIdList: User[] //This will be the list of interviewers
  ) {}
}
