import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Output() onIncrement : EventEmitter<number>;
  @Output() onDecrement : EventEmitter<number>;
  count : number;

  constructor() {
    this.onIncrement = new EventEmitter();
    this.onDecrement = new EventEmitter();
    this.count = 0;
  }

  ngOnInit() {
  }

  fireIncrementClick() {
    this.count++;
    this.onIncrement.emit(this.count);
  }

  fireDecrementClick() {
    this.count--;
    this.onDecrement.emit(this.count);
  }
}
