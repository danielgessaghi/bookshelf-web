import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertService, AuthenticationService } from '../_services/index';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { CartItem } from '../_models/cartList';
import { forEach } from '@angular/router/src/utils/collection';
import { Book } from '../_models/book';
import { Order } from '../_models/order';
import { Md5 } from 'ts-md5/dist/md5';
import { Datetime } from '../_models/DateTime';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {
  currentUser: User;
  public Cart: Order = new Order();
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
  private order_api: string = '/bookshelf-api/public/start.php/api/cart/ordered';

  ngOnInit() {
    this.http.get<Array<CartItem>>(this.ip_address)
      .subscribe(data => {
        //debugger; 
        this.CartItems = data;
        localStorage.setItem('CartItems', JSON.stringify(this.CartItems));
      });

  }

  public elements: Array<number>;
  order() {
    let i = 0;
    //let CartItems = JSON.parse(localStorage.getItem('CartItems'));
    while (this.CartItems[i] != null) {

      this.http.post(this.order_api, this.CartItems[i])
        .subscribe(ret => {

        })
      i++;
    }
    this.router.navigateByUrl('./home');
  }

  private del_api: string = '/bookshelf-api/public/start.php/api/cart/delete/item/';
  deleteItem(nOrder: string) {
    let path = this.del_api.concat(nOrder);
    let CartItems = JSON.parse(localStorage.getItem('CartItems'));
    this.http.post(path, null)
      .subscribe(data => {
        this.router.navigateByUrl('/home');
      });
  }

  private del_ord_api: string = '/bookshelf-api/public/start.php/api/cart/delete/';
  deleteOrder() {
    let item_order = this.CartItems[0].ID_ORDER.toString();
    let path1 = this.del_ord_api.concat(item_order);
    this.http.post(path1, null)
      .subscribe(data => {

      });
    this.router.navigateByUrl('/home');
  }
}