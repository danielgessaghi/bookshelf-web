import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertService, AuthenticationService } from '../_services/index';
import { PagerService, Book } from '../_models/book';


@Component({
  moduleId: module.id,
  selector: 'books',
  templateUrl: 'books.component.html',
  styles: [
    `.search-results {
            height: 20rem;
            overflow: scroll;
        }`
  ],

  /*
      template: `
          <div class="search-results"
              infiniteScroll
              [infiniteScrollDistance]="2"
              [infiniteScrollThrottle]="50"
              (scrolled)="onScroll()">
          </div>
          `
  */
})

export class BooksComponent implements OnInit {
  model: Book = new Book();
  p: number = 1;
  lock: boolean = false;
  constructor(private http: HttpClient, private pagerService: PagerService) { }

  public ip_address: string = '/bookshelf-api/public/start.php/api/books/list/';

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {}

  // paged items
  pagedItems: any[];

  ngOnInit() {
    this.pagedItems = [];
    // get dummy data
    this.loadNextPage();
  }

  loadNextPage() {
    if (!this.lock) {
      this.lock = true;
      this.http.get<Array<any>>(this.ip_address + this.p)
        .subscribe(data => {
          // set items to json response
          this.pagedItems = this.pagedItems.concat(data);
          this.p = this.p + 1;
          this.lock = false;
        });
    }
  }

  onScrollDown() {
    this.loadNextPage();
  }
}
