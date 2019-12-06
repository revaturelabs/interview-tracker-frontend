import { Profile } from "./profile";
import { Job } from "./job";

export class Comment {
  constructor(
    public date: Date = new Date(),
    public name: string = "",
    public text: string = ""
  ) {}
}
