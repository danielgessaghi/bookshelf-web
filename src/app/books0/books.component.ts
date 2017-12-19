/*
var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);

app.controller('listdata',function($scope, $http){
	$scope.users = []; //declare an empty array
	$http.get("mockJson/mock.json").success(function(response){
		$scope.users = response;  //ajax request to fetch data into $scope.data
	});

	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
});
*/

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertService, AuthenticationService } from '../_services/index';
import { Item } from '../_models/item';
import { Book } from '../_models/book';

@Component({
  templateUrl: 'books.component.html'
})

export class TableComponent implements OnInit {
  model: Item = new Item();
  loading = false;
  returnUrl: string;


  public ip_address: string = '/bookshelf-api/public/start.php/api/books/list/{page}';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) { }


  ngOnInit() {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  /*

    listdata() {
      this.http.get<Item>(this.ip_address, this.model)
        .subscribe(
        data => {
          this.router.navigate(['/login']);

        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
    }

    */

}
