import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertService, AuthenticationService } from '../_services/index';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { CartItem } from '../_models/cartList';
import { forEach } from '@angular/router/src/utils/collection';
import { Book } from '../_models/book';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {
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
  private order_api: string = '/bookshelf-api/public/start.php/api/cart/ordered';

  ngOnInit() {
    this.http.get<Array<CartItem>>(this.ip_address)
      .subscribe(data => {
        //debugger; 
        this.CartItems = data;
        localStorage.setItem('CartItems', JSON.stringify(this.CartItems));
      });
  }
  /*  newQuantity(ID_ORDER : number){
     let item =  this.CartItems.find(id => id.ID_ORDER == ID_ORDER);
     this.CartItems.push(item);
    }*/

  public elements: Array<number>;
  order() {
    let i = 0;
    let CartItems = JSON.parse(localStorage.getItem('CartItems'));
    while (CartItems[i] != null) {
      this.http.post(this.order_api, CartItems[i])
        .subscribe(ret => {
          if (ret) {
            this.router.navigateByUrl('./home');
          }
        })
      i++;
    }
  }
  private del_api: string = '/bookshelf-api/public/start.php/api/cart/delete/';
  deleteItem(nOrder: string) {
    let path = this.del_api.concat(nOrder);
    let CartItems = JSON.parse(localStorage.getItem('CartItems'));
    this.http.post(path, CartItems)
      .subscribe(data => {
        this.router.navigateByUrl('/home');
      });
  }
}