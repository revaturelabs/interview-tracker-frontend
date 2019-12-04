export class User {
  constructor(id: number, username: string, password: string) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
  id: number;
  username: string;
  password: string;
}
