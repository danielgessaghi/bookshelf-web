import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertService, UserService, AuthenticationService } from '../_services/index';
import { User } from '../_models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { Returns } from '../_models/returns';
import { CartItem } from '../_models/cartList';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';



@Component({
    selector: 'returns',
    templateUrl: './returns.component.html'
})

export class ReturnsComponent implements OnInit {
    currentUser: User;
    public ReturnsItem: Returns = new Returns();
    public ReturnsItems: Array<Returns>;
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

    public api_returns: string = '/bookshelf-api/public/start.php/api/returns/list';

    ngOnInit() {
        this.http.get<Array<Returns>>(this.api_returns)
            .subscribe(data => {
                //debugger; 
                this.ReturnsItems = data;
                localStorage.setItem('ReturnItems', JSON.stringify(data));
            });
    }


    private del_api: string = '/bookshelf-api/public/start.php/api/returns/delete/';

    ItemReturn(nReturns: string) {
        let path = this.del_api.concat(nReturns);
        let items: Array<Returns> = JSON.parse(localStorage.getItem('ReturnItems'));
        let i: number = 0;
        while (this.ReturnsItems[i] != null) {
            if (this.ReturnsItems[i].QUANTITY >= 0 && this.ReturnsItems[i].QUANTITY <= items[i].QUANTITY) {
                this.http.post(path, this.ReturnsItems[i].QUANTITY)
                    .subscribe(data => {

                    });
            }
            i++;
        }
        this.router.navigateByUrl('/returns');
    }
}