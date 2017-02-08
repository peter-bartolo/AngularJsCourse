import { Component, OnInit } from '@angular/core';
import {CookieService} from "../Cookie-Service";
import {Cookie} from "../model/Cookie";

@Component({
  selector: 'app-cookie-info',
  templateUrl: './cookie-info.component.html',
  styleUrls: ['./cookie-info.component.css']
})
export class CookieInfoComponent implements OnInit {

  private cookies : Cookie[];

  constructor(private cookieService : CookieService) {
    this.cookies = this.cookieService.getCookies();
  }

  ngOnInit() {
  }

  refreshCookies() {
    this.cookies = this.cookieService.getCookies();
  }
}
