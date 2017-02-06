/**
 * Created by stc4 on 06/02/2017.
 */

export enum CookieType {
  Chocolate,
  ChocolateChip,
  PeanutButter
}

export enum CookieShape {
  Round,
  Square,
  Abstract
}

export class Cookie {
  constructor(private cookieType: CookieType, private cookieTimeInMilliSeconds: number, private cookieShape: CookieShape) {}

  getCookieTypeAsString()
  {
    switch(this.cookieType)
    {
      case CookieType.Chocolate :
        return "Chocolate";
      case CookieType.ChocolateChip :
        return "Chocolate-Chip";
      case CookieType.PeanutButter :
        return "Peanut-Butter";
    }
  }
}
