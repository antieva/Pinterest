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
    if (this.accountService.checkEmail(email)) {
      this.accountService.addUser(newUser);
    }
  }

  isUniqueUser(email:string) {
    if (this.accountService.checkEmail(email)) {
      return true;
    }
    return false;
  }
}
