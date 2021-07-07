import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PubsubService } from '../services/pub-sub.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  userDetails: any;
  showWarning: boolean;
  nummbers: any = [];
  // calls when we r creating instance of class
  constructor(private router: Router, private pubsubSvc: PubsubService) {
    this.showWarning = false;
    this.userDetails = {
      email: '',
      password: ''
    };
  }



  // lifecylce hook
  ngOnInit() {
  }

  checkUser() {
    const userDetails: any = localStorage.getItem('userDetails');
    const allUsers: any = JSON.parse(userDetails);
    if (allUsers) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < allUsers.length; i++) {
        if (this.userDetails.email === allUsers[i].email && this.userDetails.password === allUsers[i].password) {
          this.router.navigate(['/home']);
          localStorage.setItem('token', 'loggedIn');
          this.pubsubSvc.pubLoginStatus('loggedIn');
          return;
        }
      }
    }
    this.userDetails = {
      email: '',
      password: ''
    };
    this.showWarning = true;

  }
}
