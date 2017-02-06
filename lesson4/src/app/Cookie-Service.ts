import {Injectable} from "@angular/core";
import {Cookie, CookieType, CookieShape} from "./model/Cookie";
/**
 * Created by stc4 on 06/02/2017.
 */
@Injectable()

export class CookieService {
  private cookies : Cookie[];

  constructor() {
    this.cookies = [];
    for(let i = 0; i < 10; i++)
    {
      this.cookies.push(new Cookie(CookieType.Chocolate, i, CookieShape.Round));
    }
  }

  public removeCookie() {
    this.cookies.pop();
  }

  public addCookie(cookieType: CookieType, cookieTimeInMilliSeconds: number, cookieShape: CookieShape) {
    this.cookies.push(new Cookie(cookieType, cookieTimeInMilliSeconds, cookieShape));
  }

  public getCookies() {
    return this.cookies;
  }
}
