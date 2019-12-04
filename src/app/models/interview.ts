import { Comment } from "./comment";
import { Job } from "./job";
import { Profile } from "./profile";
import { User } from "./user";

export class Interview {
  constructor(
    public id: number,
    public profile: Profile,
    public comments: Comment[],
    public date: Date,
    public isComplete: boolean,
    public job: Job,
    public users: User[]
  ) {}
}
