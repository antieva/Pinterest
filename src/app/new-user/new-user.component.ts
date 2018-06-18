import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [AccountService]
})
export class NewUserComponent {
  @Output() sendUser = new EventEmitter();

  users: User[] = [];

  constructor(private router: Router, private accountService: AccountService) { }

  continueCreation(email: string, password: string) {
    let newUser: User = new User(email, password);
    this.sendUser.emit(newUser);
    if (this.accountService.checkEmail(email)) {
      this.accountService.addUser(newUser);
      this.router.navigate(['users', newUser.id]);
    }
  }

  isUniqueUser(email:string) {
    if (this.accountService.checkEmail(email)) {
      return true;
    }
    return false;
  }
}
