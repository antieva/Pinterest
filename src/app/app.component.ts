import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[] = [
  new User('emailOne@gmail.com', '123password'),
  new User('emailTwo@gmail.com', '456password'),
  new User('emailThree@gmail.com', '111password')
  ];

  addUser(newUser: User) {
    for (let user of this.users) {
      if (user.email === newUser.email) {
        return false;
      }
    }
    this.users.push(newUser);
    for (let user of this.users) {
      console.log(user.email);
    }
    return true;
  }
}
