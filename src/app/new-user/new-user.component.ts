import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [AccountService]
})
export class NewUserComponent {
  @Output() sendUser = new EventEmitter();

  constructor(private accountService: AccountService) { }

  submitForm(email: string, password: string) {
    let newUser: User = new User(email, password);
    this.sendUser.emit(newUser);
    this.accountService.addUser(newUser);
  }
  users: User[] = [
  new User('emailOne@gmail.com', '123password'),
  new User('emailTwo@gmail.com', '456password'),
  new User('emailThree@gmail.com', '111password')
  ];

  isUniqueUser(email:string) {
    for (let user of this.users) {
      if (user.email === email) {
        return false;
      }
    }
    return true;
  }
}
