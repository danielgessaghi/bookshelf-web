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
        this.authenticationService.login(this.model);
        this.router.navigateByUrl('/home');
    }
}
