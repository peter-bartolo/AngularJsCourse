import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Output() changes = new EventEmitter();
  private counter : number;

  constructor() {
    this.counter = 0;
  }

  ngOnInit() {
  }

  change(increment) {
    this.counter += increment;
    this.changes.emit(this.counter);
  }
}
