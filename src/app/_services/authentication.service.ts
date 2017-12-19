import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    private ip_address: string = '/bookshelf-api/public/start.php/api/login';
    constructor(private http: HttpClient) { }

    private isLogged: boolean;
    IsLogged(): boolean {
        return this.isLogged;
    }

    user: User;
    UserName(): string {
        return this.user ? this.user.USERNAME : "";
    }

    login(model: User) {
        this.http.post<User>(this.ip_address, model)
            .subscribe(
            ret => {
                if (ret) {
                    this.user = ret;
                    localStorage.setItem('currentUser', JSON.stringify(this.user));
                    this.isLogged = true;
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.isLogged = false;
        this.user = null;
    }
}
