import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private toggle : boolean = false;
  private names : string[] = ['Peter', 'Martin', 'David']
  private tasks: task[] =
    [
      {
        "task_name": "Take out clothes from washing line",
        "complete": false
      },
      {
        "task_name": "Buy groceries",
        "complete": false
      },
      {
        "task_name": "Prepare dinner",
        "complete": false
      },
      {
        "task_name": "Watch netflix",
        "complete": true
      }
    ]
}
