export class User {
  public name: string = "";
  public gender: string = "";
  public laguage: string = "";
  public country: string = "";
  public interests: string[] = [];

  constructor(public email: string, public password: string) {
    let i: number = 0;
    let name: string = '';
    for (var char of email) {
      while (char != '@') {
        i++;
      }
      break;
    }
    name = email.slice(0,i);
  }
}
