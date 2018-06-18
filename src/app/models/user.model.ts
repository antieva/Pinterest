export class User {
  public gender: string = "";
  public laguage: string = "";
  public country: string = "";
  public interests: string[] = [];

  constructor(public email: string, public password: string, public name: string) {}
}
