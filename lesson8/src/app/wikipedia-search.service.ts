import { Injectable } from '@angular/core';
import {URLSearchParams, Jsonp} from "@angular/http";
import {Observable} from "rxjs";

import 'rxjs/add/operator/map';

@Injectable()
export class WikipediaSearchService {

  constructor(private jsonp : Jsonp) { }

  search(searchString) : Observable<any>
  {
    let search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', searchString);
    search.set('format', 'json');

    return this.jsonp.get('https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
      .map(response => response.json()[1]);
  }
}
