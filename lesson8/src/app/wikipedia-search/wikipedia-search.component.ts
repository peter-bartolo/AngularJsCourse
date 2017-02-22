import { Component, OnInit } from '@angular/core';
import {WikipediaSearchService} from "../wikipedia-search.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-wikipedia-search',
  templateUrl: './wikipedia-search.component.html',
  styleUrls: ['./wikipedia-search.component.css']
})
export class WikipediaSearchComponent implements OnInit {

  private results = [];
  private searchString : string;
  private term$ = new Subject();

  constructor(private wikipediaSearchService : WikipediaSearchService) {
    this.term$
      .debounceTime(500)
      .subscribe(term => {
        this.wikipediaSearchService.search(term).subscribe(results => {
          this.results = results;
        });
      })
  }

  ngOnInit() {
  }

  searchWikipedia()
  {
    this.term$.next(this.searchString);
  }
}
