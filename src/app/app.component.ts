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
  new User('emailOne@gmail.com', '123password', 'femail', 'English', 'USA', ['Home decor', 'Makeup', 'Food and drink', 'Humor', 'Art']),
  new User('emailTwo@gmail.com', '456password', 'femail', 'English', 'USA', ['Home decor', 'Makeup', 'Food and drink', 'Humor', 'Art']),
  new User('emailThree@gmail.com', '111password', 'male', 'English', 'USA', ['Home decor', 'Healthy Snacks', 'Food and drink', 'Humor', 'Workouts'])
  ];

  isUniqueUser(newUser: User) {
    for (let user of this.users) {
      if (user[0] === newUser[0] && user[1] === newUser[1]) {
        return false;
      }
    }
    return true;
  }

  addUser(newUser: User) {
    this.users.push(newUser);
  }
}
