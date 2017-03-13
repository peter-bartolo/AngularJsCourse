import { Component } from '@angular/core';
import {MockBackend, MockConnection} from "@angular/http/testing";
import {Response, RequestMethod} from "@angular/http";

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
        connection.mockRespond(new Response(<any>{}));
      }
    });
  }
}
