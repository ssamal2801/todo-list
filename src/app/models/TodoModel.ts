export class TodoModel {
  slno: number;
  title: string;
  desc: string;
  active: boolean;

  constructor(slno: number, title: string, desc: string, active: boolean) {
    this.slno = slno;
    this.title = title;
    this.desc = desc;
    this.active = active;
  }
}
