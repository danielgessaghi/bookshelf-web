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

  constructor(private userService: UserService, private router: Router, protected auth: AuthenticationService) {
    
  }
  ngOnInit(): void {
    this.router.navigateByUrl('/home');
  }

}
