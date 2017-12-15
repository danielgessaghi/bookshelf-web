import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertService, UserService } from '../_services/index';
import { User } from '../_models/user';
import { Headers, RequestOptions } from '@angular/http';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;


public ip_address: string = 'http://172.31.1.30/bookshelf-api/public/start.php/api/register';

    constructor(
        private http: HttpClient,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        var user_register = '{"FIRSTNAME":"'+this.model.firstName+'","LASTNAME":"'+this.model.lastName+'","USERNAME":"'+this.model.username+'","EMAIL":"'+this.model.email+'","PASSWORD":"'+this.model.password+'","PHONE":"'+this.model.phone+'","CAP":"'+this.model.cap+'","CITY":"'+this.model.city+'","COUNTRY":"'+this.model.country+'","STREET":"'+this.model.street+'"}';
        this.userService.create(this.model);

        this.http.post<User>(this.ip_address, user_register)

            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },

                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
