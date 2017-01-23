import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
