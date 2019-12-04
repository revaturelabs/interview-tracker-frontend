export class Job {
  constructor(
    id: number,
    description: string,
    isFilled: boolean,
    title: string
  ) {
    this.id = id;
    this.description = description;
    this.isFilled = isFilled;
    this.title = title;
  }
  id: number;
  description: string;
  isFilled: boolean;
  title: string;
}
