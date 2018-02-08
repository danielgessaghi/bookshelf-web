import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertService, UserService, AuthenticationService } from '../_services/index';
import { User } from '../_models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { Returns } from '../_models/returns';
import { CartItem } from '../_models/cartList';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';



@Component({
    selector: 'admin_returns',
    templateUrl: './admin_returns.component.html'
})

export class AdminReturnsComponent implements OnInit {
    currentUser: User;
    public ReturnsItem: Returns = new Returns();
    public ReturnsItems: Array<Returns>;
    loading = false;
    returnUrl: string;
    isConfermed:boolean;
    isCompleted:boolean;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private userService: UserService
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    public api_returns: string = '/bookshelf-api/public/start.php/api/returns_admin/list';

    ngOnInit() {
        this.http.get<Array<Returns>>(this.api_returns)
            .subscribe(data => {
                //debugger; 
                this.ReturnsItems = data;
                localStorage.setItem('ReturnItems', JSON.stringify(data));
            });
    }


    private conf_api: string = '/bookshelf-api/public/start.php/api/returns_admin/confirmed/';

    ItemConfirmed(nReturns: string) {
        let path = this.conf_api.concat(nReturns);
        let items: Array<Returns> = JSON.parse(localStorage.getItem('ReturnItems'));
        let i: number = 0;
        this.http.post(path, null)
                    .subscribe(data => {

                    });
    }


    private compl_api: string = '/bookshelf-api/public/start.php/api/returns_admin/complited/';

    ItemCompleted(nReturns: string) {
        let path = this.compl_api.concat(nReturns);
        let items: Array<Returns> = JSON.parse(localStorage.getItem('ReturnItems'));
        let i: number = 0;
        this.http.post(path, null)
            .subscribe(data => {

            });
    }



}