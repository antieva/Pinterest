export class User {
  public name: string = "";
  public gender: string = "";
  public laguage: string = "";
  public country: string = "";
  public interests: string[] = [];

  constructor(public email: string, public password: string) {
    let i: number = 0;
    while (this.email[i] != '@' || i < this.email.length) {
        i++;
    }
    this.name = this.email.slice(0,i);
  }
}
