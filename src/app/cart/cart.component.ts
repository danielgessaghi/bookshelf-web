import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertService, AuthenticationService } from '../_services/index';


@Component({
    selector: 'cart',
    templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit{

    loading = false;
    returnUrl: string;
  
  
    public ip_address: string = '/bookshelf-api/public/start.php/api/';// url da mettere
  
    constructor(
      private http: HttpClient,
      private route: ActivatedRoute,
      private router: Router,
      private alertService: AlertService
    ) { }
  
  
    ngOnInit() {
  
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

}