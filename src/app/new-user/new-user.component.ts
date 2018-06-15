import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  @Output() sendUser = new EventEmitter();

  submitForm(email: string, password: string) {
    let newUser: User = new User(email, password);
    this.sendUser.emit(newUser);
  }
  errorMessage() {
    this.sendUser.emit(false);
  }
}
