export class Comment {
  constructor(id: number, date: Date, name: string, text: string) {
    this.id = id;
    this.date = date;
    this.name = name;
    this.text = text;
  }
  id: number;
  date: Date;
  name: string;
  text: string;
}
