import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertService, AuthenticationService } from '../_services/index';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { CartItem } from '../_models/cartList';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {
  //model: CartItem = new CartItem();
  currentUser: User;
  public CartItem: CartItem = new CartItem();
  public CartItems: Array<CartItem>;
  loading = false;
  returnUrl: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  private ip_address: string = '/bookshelf-api/public/start.php/api/cart/list';
  private order_api:string = '/bookshelf-api/public/start.php/api/cart/ordered';

  ngOnInit() {
    this.http.get<Array<CartItem>>(this.ip_address)
    .subscribe(data => {
      //debugger; 
      this.CartItems = data;
    });
  }
  
  order(model: Array<CartItem>){
    this.http.post(this.order_api, model)
    .subscribe(ret=>{
      if (ret) {
        this.router.navigateByUrl('./home');
      }
    })
  }
}