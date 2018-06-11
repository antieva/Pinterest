import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  users: User[] = [
  new User('emailOne@gmail.com', '123password'),
  new User('emailTwo@gmail.com', '456password'),
  new User('emailThree@gmail.com', '111password')
  ];

  isUniqueUser(newUser: User) {
    for (let user of this.users) {
      if (user[0] === newUser.email && user[1] === newUser.password) {
        return false;
      }
    }
    return true;
  }

  addUser(newUser: User) {
    if (this.isUniqueUser(newUser)){
      this.users.push(newUser);
      return true;
    }
    return false;
  }
}
