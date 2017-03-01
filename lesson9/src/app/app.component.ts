import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genderTypes : string[] = ['male', 'female', 'not specified'];

  onSubmit(formGroup : any) {
    debugger;
  }
}
