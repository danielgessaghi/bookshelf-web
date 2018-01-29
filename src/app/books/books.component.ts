import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertService, AuthenticationService } from '../_services/index';
import { PagerService, Book } from '../_models/book';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgModule } from '@angular/core/src/metadata/ng_module';

@Component({
  moduleId: module.id,
  templateUrl: 'books.component.html'
})

export class BooksComponent implements OnInit {

  model: Book = new Book();
  p: number = 1;
  lock: boolean = false;
  constructor(private http: HttpClient, private pagerService: PagerService) { }
  public category_button:string = '/bookshelf-api/public/start.php/api/category/list';
  public ip_address: string = '/bookshelf-api/public/start.php/api/books/list/';
  
  // array of all items to be paged
  private allItems: any[];
  private Categories:any[];

  // pager object
  pager: any = {}

  // paged items
  pagedItems: any[];

  ngOnInit() {
    this.pagedItems = [];
    // get dummy data
    this.loadNextPage();

    this.Categories = [];
    this.loadCategories();
  }

  loadCategories(){
    this.http.get<Array<any>>(this.category_button)
        .subscribe(data => {
          this.Categories = data;
        });
  }

  private SortBy: string;
  sort(model:string){
    this.SortBy = model;
    return this.SortBy;
  }

  public api_sort ='/bookshelf-api/public/start.php/api/category/sorted/';

  loadNextPage() {
    if (!this.lock) {
      this.lock = true;
      this.http.get<Array<any>>(this.ip_address + this.p)
        .subscribe(data => {
          // set items to json response
          if (this.SortBy != null) {

            let path = this.api_sort.concat(this.SortBy)
            this.http.post(path,this.model)
            .subscribe(ret=>{
              this.pagedItems = this.pagedItems.concat(ret);
              this.p = this.p + 1;
              this.lock = false;
            });
          }
          else{
            this.pagedItems = this.pagedItems.concat(data);
            this.p = this.p + 1;
            this.lock = false;
          }
        });
    }
  }

  onScroll() {
    this.loadNextPage();
  }

  public add_item_api: string = '/bookshelf-api/public/start.php/api/cart/add/';
  addItem(isbn:string){
    let path =  this.add_item_api.concat(isbn);
    this.http.post(path,this.model)
    .subscribe(ret=>{

    });
  }

}
