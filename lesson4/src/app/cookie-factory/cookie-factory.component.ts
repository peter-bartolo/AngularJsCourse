import { Component, OnInit } from '@angular/core';
import {CookieService} from "../Cookie-Service";
import {CookieType, CookieShape} from "../model/Cookie";

@Component({
  selector: 'app-cookie-factory',
  templateUrl: './cookie-factory.component.html',
  styleUrls: ['./cookie-factory.component.css']
})
export class CookieFactoryComponent implements OnInit {
  private cookieType : CookieType;
  private cookieTimeInMilliSeconds : number;
  private cookieShape : CookieShape;

  constructor(private cookieService : CookieService) { }

  ngOnInit() {
  }

  createCookie()
  {
    this.cookieService.addCookie(this.cookieType, this.cookieTimeInMilliSeconds, this.cookieShape);
  }
}
