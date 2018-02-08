import { Component, OnInit } from '@angular/core';
import { User } from '../app/_models/index';
import { UserService, AuthenticationService } from '../app/_services/index';
import '../assets/app.css';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
 
  title: "app";
  currentUser: User ;
  isLogged: boolean;
  isAdmin:boolean;

  constructor(private userService: UserService, private router: Router,) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser) 
    {
      this.isLogged = this.currentUser.Logged;
      if (this.currentUser.ID_GROUP == 2) {
        this.isAdmin  = true;
      } else {
        this.isAdmin = false;
      }
    } 
    else 
    {
      this.isLogged = false;
    }
  }
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.router.navigateByUrl('/home');
  }

}
