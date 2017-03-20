import { Component } from '@angular/core';
import {MockBackend, MockConnection} from "@angular/http/testing";
import {Response, RequestMethod, ResponseOptions} from "@angular/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(backend: MockBackend) {

    let todoitems = [
      {name : 'Test 1'},
      {name : 'Test 2'}
    ];

    backend.connections.subscribe( (connection: MockConnection) => {
      if(connection.request.method === RequestMethod.Get)
      {
        connection.mockRespond(new Response(<any>{
          body : JSON.stringify((todoitems))
        }));
      }

      if(connection.request.method === RequestMethod.Post)
      {
        Observable.of(new Error('404 Not Found'))
          .delay(this.generateRandomNumberOfMilliSeconds(1500))
          .subscribe( (error) => {
            connection.mockError(error);
          }
        );
        // Observable.of(new Response(<any>{}))
        //   .delay(this.generateRandomNumberOfMilliSeconds(1500)).subscribe( (response) => {
        //     connection.mockRespond(response);
        //   }
        // );
      }
    });
  }

  public generateRandomNumberOfMilliSeconds(max: number) {
    return Math.random() * max;
  }
}
