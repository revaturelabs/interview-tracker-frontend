import { Interview } from "./interview";

export class Comment {
  constructor(
    public id: number = 0,
    public date: Date = new Date(),
    public name: string = "",
    public text: string = "",
    public interviewId: Interview = new Interview()
  ) {}
}
