import { Interview } from "./interview";

export class User {
  constructor(
    public id: number = 0,
    public username: string = "",
    public password: string = "",
    public interviews: Interview[] = []
  ) {}
}
