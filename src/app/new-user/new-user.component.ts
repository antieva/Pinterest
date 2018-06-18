import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  constructor(private router: Router, private accountService: AccountService) { }

  continueCreation(email: string, password: string) {
    let newUser: User = new User(email, password);
    this.sendUser.emit(newUser);
    if (!this.accountService.isEmailInDatabase(email)) {
      //this.accountService.addUser(newUser);
      this.router.navigate(['newUser', newUser.email, newUser.password, newUser.name]);
    }
  }


  isUniqueUser(email:string) {
    if (!this.accountService.isEmailInDatabase(email)) {
      return true;
    }
    return false;
  }
}
