import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from "../models/User";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() onRegister : EventEmitter<User>;
  formUser : User;

  constructor() {
    this.formUser = new User('', '');
    this.onRegister = new EventEmitter();
  }

  ngOnInit() {
  }

  fireRegisterClick()
  {
    this.onRegister.emit(new User(this.formUser.name, this.formUser.surname));
    //this.onRegister.emit(this.formUser);
  }
}
