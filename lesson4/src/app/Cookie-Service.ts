import {Injectable} from "@angular/core";
import {Cookie} from "./model/Cookie";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

/**
 * Created by stc4 on 06/02/2017.
 */
@Injectable()

export class CookieService {
  private cookies : Cookie[];

  constructor(private httpService: Http) {
    /*this.httpService.get("http://192.168.1.129:3000/cookies").subscribe(
      (response) => this.cookies = response.json()
    )*/
    this.httpService.get("http://192.168.1.129:3000/cookies").map
    (
      response =>
        response.json().map
        (
          (cookie) => new Cookie(cookie.id, cookie.cookieType, cookie.cookieSizeInMillimetres, cookie.cookieShape)
        )
    );
    /*this.cookies = [];
    for(let i = 0; i < 10; i++)
    {
      this.cookies.push(new Cookie(CookieType.Chocolate, i, CookieShape.Round));
    }*/
  }

  public removeCookie() {
    this.httpService.delete("http://192.168.1.129:3000/cookies/" + this.cookies.pop().id).subscribe();
  }

  public addCookie(id: number, cookieType: string, cookieSizeInMillimetres: number, cookieShape: string) {
    this.cookies.push(new Cookie(id, cookieType, cookieSizeInMillimetres, cookieShape));
  }

  public getCookies() {
    return this.cookies;
  }
}
