import { Component } from '@angular/core';
import { User } from '../app/_models/index';
import { UserService, AuthenticationService } from '../app/_services/index';
import '../assets/app.css';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: "app";
  currentUser: User ;
  isLogged: boolean

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser) 
    {
      this.isLogged = this.currentUser.Logged;
    } 
    else 
    {
      this.isLogged = false;
    }
    
  }
}
