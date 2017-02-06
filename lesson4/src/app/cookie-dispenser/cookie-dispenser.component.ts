import { Component, OnInit } from '@angular/core';
import {CookieService} from "../Cookie-Service";

@Component({
  selector: 'app-cookie-dispenser',
  templateUrl: './cookie-dispenser.component.html',
  styleUrls: ['./cookie-dispenser.component.css']
})
export class CookieDispenserComponent implements OnInit {

  constructor(private cookieService : CookieService) { }

  ngOnInit() {
  }

  public eatCookie()
  {
    this.cookieService.removeCookie();
  }
}
