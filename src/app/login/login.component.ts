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
    model: any = {};
    loading = false;
    returnUrl: string;

public input: User;
public output: User;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        //private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }


    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        var user_login = '{"EMAIL: ":"'+this.model.email+'","PASSWORD":"'+this.model.password+'"}';
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        //headers.append("Authorization", 'Bearer ' + localStorage.getItem('id_token'));
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post<User>('http://172.31.1.30/bookshelf-api/public/start.php/api/login', user_login)

        .subscribe(
          (dato => {
            this.model = dato;
          })
        /*this.http.get<User>(`http://172.31.1.30/bookshelf/public/start.php/api/login?password=${this.model.password}`)
          .subscribe(
            (dato2 => {
              this.model = dato2;
            })*/
        );


/*
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
*/
    }

}
