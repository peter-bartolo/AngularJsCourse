import { Component, OnInit } from '@angular/core';
import {CookieService} from "../Cookie-Service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-cookie-dispenser',
  templateUrl: './cookie-dispenser.component.html',
  styleUrls: ['./cookie-dispenser.component.css']
})
export class CookieDispenserComponent implements OnInit {

  constructor(private cookieService : CookieService, private httpService : Http) { }

  ngOnInit() {
  }

  public eatCookie()
  {
    this.cookieService.removeCookie();
  }
}
