import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {Router} from "@angular/router";
import {ListService} from "../list.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  item : Object;
  items : Array<Object> = [];

  constructor(private router: Router, private listService : ListService) {
  }

  ngOnInit() {
    this.getAllItems();
  }

  public getAllItems() {
    this.listService.getItems().subscribe((itemsRemote : Array<Object>) => {
      this.items = itemsRemote
    });
  }

  public postItems() {
    this.listService.postItems().subscribe(
      () => {
        this.items.push({name: this.item});
      },
      () => {
        this.router.navigate(['/error']);
      });
  }
}
