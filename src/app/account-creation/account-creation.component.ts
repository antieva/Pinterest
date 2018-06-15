import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css'],
  providers: [AccountService]
})
export class AccountCreationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
