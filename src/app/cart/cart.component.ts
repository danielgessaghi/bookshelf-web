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
  CartItems : Array<CartItem>;
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
  public ip_address: string = '/bookshelf-api/public/start.php/api/cart/list';

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.http.get<CartItems>(this.ip_address)
    .subscribe(
    ret => {
        if (ret) {
            this.user = ret;
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            this.isLogged = true;
        }
    })
  }
  order(){
  }
}