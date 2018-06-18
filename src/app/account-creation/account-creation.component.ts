import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AccountService } from '../account.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css'],
  providers: [AccountService]
})
export class AccountCreationComponent implements OnInit {
  userEmail: string = '';
  userPassword: string = '';
  userName: string = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userEmail =urlParameters['email'];
      this.userPassword =urlParameters['password'];
      this.userName =urlParameters['name'];
    });
  }

}
