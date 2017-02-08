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
  constructor(private cookieType: CookieType, private cookieSizeInMillimetres: number, private cookieShape: CookieShape) {}

  getCookieTypeAsString() {
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

  getCookieShapeAsString() {
    switch(this.cookieShape)
    {
      case CookieShape.Round:
        return "Round";
      case CookieShape.Square :
        return "Square";
      case CookieShape.Abstract :
        return "Abstract";
    }
  }
}
