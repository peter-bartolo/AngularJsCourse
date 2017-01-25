import {Component, OnInit, Input} from '@angular/core';
import {User} from "../models/user";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input() user : User;

  constructor() { }

  ngOnInit() {
  }
  isEmpty(nameOrSurname : string)
  {
    if(nameOrSurname == 'name')
    {
      return this.user.name.length <= 0;
    }

    if(nameOrSurname == 'surname')
    {
      return this.user.surname.length <= 0;
    }
  }
}
