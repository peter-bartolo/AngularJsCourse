import { Component, OnInit } from '@angular/core';
import {CookieService} from "../Cookie-Service";
import {CookieType, CookieShape} from "../model/Cookie";
import {Http} from "@angular/http";

@Component({
  selector: 'app-cookie-factory',
  templateUrl: './cookie-factory.component.html',
  styleUrls: ['./cookie-factory.component.css']
})
export class CookieFactoryComponent implements OnInit {
  private cookieType : CookieType;
  private cookieSizeInMillimetres : number;
  private cookieShape : CookieShape;

  constructor(private cookieService : CookieService, private httpService : Http) { }

  ngOnInit() {
  }

  createCookie()
  {
    //this.cookieService.addCookie(this.cookieType, this.cookieSizeInMillimetres, this.cookieShape);
    this.httpService.post("http://192.168.1.129:3000/cookies",
      JSON.stringify({
        cookieType : this.cookieType,
        cookieSizeInMillimetres : this.cookieSizeInMillimetres,
        cookieShape : this.cookieType
      }),
      <any>{
        headers: {
          "Content-Type":"text/plain"
        }
      }).subscribe();
  }
}
