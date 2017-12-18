import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertService, AuthenticationService } from '../_services/index';
import { User } from '../_models/user';
import { Headers, RequestOptions } from '@angular/http';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html'

})

export class LoginComponent implements OnInit {
    model: User = new User();
    loading = false;
    returnUrl: string;

    public ip_address: string = '/bookshelf-api/public/start.php/api/login';

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
    ngOnInit() {
        this.authenticationService.logout();

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    login() {
        this.loading = true;
        this.http.post<User>(this.ip_address, this.model)
            .subscribe(
            ret => {
                localStorage.setItem('currentUser', JSON.stringify(ret));
                this.loading = false;
                this.router.navigate(['/home']);
            });
    }
}
