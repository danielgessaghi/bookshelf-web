import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { TopCategories } from '../_models/top-categories';
import { TopBook } from '../_models/top-books';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    public TopBook: TopBook = new TopBook();
    public TopCategories: TopCategories = new TopCategories();

    books: Array<TopBook>;
    categories: Array<TopCategories>;
    users: User[] = [];


    constructor
        (
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private userService: UserService,

    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.categories = JSON.parse(localStorage.getItem('TopCategories'));
        this.books = JSON.parse(localStorage.getItem('TopBook'));
    }
    private top_book_path: string = '/bookshelf-api/public/start.php/api/top-3/book';
    private top_category_path: string = '/bookshelf-api/public/start.php/api/top-3/category';
    ngOnInit() {
        // this.loadAllUsers();

        this.http.get<Array<TopCategories>>(this.top_category_path)
            .subscribe(data => {
                this.categories = data;
                localStorage.setItem('TopCategories', JSON.stringify(this.categories));
            });

        this.http.get<Array<TopBook>>(this.top_book_path)
            .subscribe(data => {
                this.books = data;
                localStorage.setItem('TopBook', JSON.stringify(this.books));
            });
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}