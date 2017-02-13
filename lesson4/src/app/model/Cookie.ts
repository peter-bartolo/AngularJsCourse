/**
 * Created by stc4 on 06/02/2017.
 */

export class Cookie {
  constructor(public id : number, public cookieType: string, public cookieSizeInMillimetres: number, public cookieShape: string) {
    this.id = id;
    this.cookieType = cookieType;
    this.cookieSizeInMillimetres = cookieSizeInMillimetres;
    this.cookieShape = cookieShape;
  }
}
