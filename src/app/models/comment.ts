import { Profile } from "./profile";
import { Job } from "./job";
import { Interview } from './interview';

export class Comment {
  constructor(
    public date: Date = new Date(),
    public name: string = "",
    public text: string = "",
    public interview: Interview
  ) {}
}
