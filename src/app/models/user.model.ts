export class User {
  public name: string = "";
  public gender: string = "";
  public laguage: string = "";
  public country: string = "";
  public interests: string[] = [];
  public id: number;
  public static counter: number = 0;

  constructor(public email: string, public password: string) {
    this.id = User.counter;
    User.counter++;
  }
}
