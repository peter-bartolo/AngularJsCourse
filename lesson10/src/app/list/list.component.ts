import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items : Array<Object> = [];

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.getAllItems().subscribe( (itemsRemote : Array<Object>) => {
      this.items = itemsRemote
    });
  }

  public getAllItems() {
    return this.http.get('/items').map((r) => r.json());
  }
}
