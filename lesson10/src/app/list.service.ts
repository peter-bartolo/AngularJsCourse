import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ListService {

  constructor(private http: Http) { }

  public getItems() {
    return this.http.get('/items').map((r) => r.json());
  }

  public postItems() {
    return this.http.post('/items', null);
  }

}
