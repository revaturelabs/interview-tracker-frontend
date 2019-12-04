export class Profile {
  constructor(
    id: number,
    description: string,
    firstName: string,
    lastName: string
  ) {
    this.id = id;
    this.description = description;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  id: number;
  description: string;
  firstName: string;
  lastName: string;
}
