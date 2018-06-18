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

  isEmailInDatabase(email: string) {
    for (let user in this.users ) {
      if (user['email'] === email) {
        return true;
      }
    }
    return false;
  }

  addUser(newUser: User) {
    this.users.push(newUser)
  }

}
