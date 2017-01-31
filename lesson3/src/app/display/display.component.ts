import {Component, OnInit, Input} from '@angular/core';
import {User} from "../models/User";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() user : User;

  constructor() { }

  ngOnInit() {
  }

}
