import { Profile } from "./profile";
import { Job } from "./job";

export class Comment {
  constructor(
    public id: number,
    public date: Date,
    public name: string,
    public text: string
  ) {}
}
