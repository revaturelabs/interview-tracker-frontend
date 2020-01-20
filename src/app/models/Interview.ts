import Job from './Job';
import User from './User';
import Profile from './Profile';

export default class Interview {
  constructor(
    public id: number,
    public date: Date,
    public isCompleted: boolean,
    public job: Job,
    public profile: Profile,
    public users: User[] //This will be the list of interviewers
  ) {}
}
