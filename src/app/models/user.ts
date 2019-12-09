import { Interview } from './interview';

export class User {
  constructor(
    public username: string = "",
    public password: string = "",
    public interviews: Interview[] = []
  ) {}
}
