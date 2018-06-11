export class User {
  public name: string = "";
  constructor(public email: string, public password: string, public gender: string, public laguage: string, public country: string, public interests: string[]) { }
}
