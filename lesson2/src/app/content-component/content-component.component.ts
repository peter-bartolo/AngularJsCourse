import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
