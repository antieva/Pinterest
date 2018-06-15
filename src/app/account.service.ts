import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AccountService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getAccounts() {
    return this.users;
  }

}
