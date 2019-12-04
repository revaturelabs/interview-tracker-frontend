import { Comment } from "./comment";
import { Job } from "./job";
import { Profile } from "./profile";

export class Interview {
  id: number;
  date: Date;
  isComplete: boolean;
  job: Job;
  profiles: Profile[];
  comments: Comment[];
}
