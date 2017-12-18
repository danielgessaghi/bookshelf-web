import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertService, UserService } from '../_services/index';
import { User } from '../_models/user';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: User = new User();
    loading = false;
    public ip_address: string = '/bookshelf-api/public/start.php/api/register';

    constructor(
        private http: HttpClient,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        //this.userService.create(this.model);

        this.http.post<User>(this.ip_address, this.model)
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
