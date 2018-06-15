import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AccountService]
})
export class LoginComponent implements OnInit {
  users: User[];

  constructor(private accountService: AccountService) {}

  ngOnInit() {

  }

  goToAccount(loggedinUser: User) {

  }

}
