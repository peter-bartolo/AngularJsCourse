import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  private nameObservable = Observable.of('Peter');
  private pi : number = Math.PI;
  private student = {
    name: 'julian'
  }
  private todaysDate = new Date();
  private students = [
    {id: 1, name: 'peter'},
    {id: 2, name: 'martin'},
    {id: 3, name: 'david'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
