import { Comment } from "./comment";
import { Job } from "./job";
import { Profile } from "./profile";
import { User } from "./user";

export class Interview {
  constructor(
    public profile: Profile = new Profile(),
    public comments: Comment[] = [],
    public date: Date = new Date(),
    public complete: boolean = false,
    public job: Job = new Job(),
    public users: User[] = [],
  ) {}
}
