import { Component } from '@angular/core';
import {task} from "./task";
import {ChatService} from "./Chat-Service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private toggle : boolean = false;
  private names : string[] = ['Peter', 'Martin', 'David']
  private taskName : string;
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

  constructor (chatService : ChatService) {
    chatService.doSomeThing();
  }

  onAddTask(taskName : string)
  {
    this.tasks.push({"task_name": taskName, "complete": false})
  }
}
