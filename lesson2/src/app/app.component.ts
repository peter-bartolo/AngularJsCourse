import {Component, ViewEncapsulation} from '@angular/core';
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  user : User;

  constructor()
  {
    this.user = new User("Peter", "");
  }

  childWasIncremented(value: number) {
    console.log('child was incremented!' + value );
  }

  childWasDecremented(value: number) {
    console.log('child was decremented!' + value );
  }
}
