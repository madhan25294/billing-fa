import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userDetails: any;
  showWarning: boolean;
  warningMessage: string;

  constructor(private router: Router) {
    this.showWarning = false;
    this.warningMessage = '';

    this.userDetails = {
      name: '',
      lName: '',
      email: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  userRegistration() {
    // validation 
    if (!this.userDetails.name || !this.userDetails.lName || !this.userDetails.email ||
      !this.userDetails.password) {
      this.showWarning = true;
      this.warningMessage = 'Please enter all the fields';
      return;
    }
    if (!/^[a-z][a-z\s]*$/.test(this.userDetails.name)) {
      this.showWarning = true;
      this.warningMessage = 'Please enter valid first name';
      return;
    }
    if (!/^[a-z][a-z\s]*$/.test(this.userDetails.lName)) {
      this.showWarning = true;
      this.warningMessage = 'Please enter valid Last name';
      return;
    }
    if (!this.validateEmail(this.userDetails.email)) {
      this.showWarning = true;
      this.warningMessage = 'Please enter valid email address';
      return;
    }
    let allUsers: any = [];
    const users: any = localStorage.getItem('userDetails')
    if (JSON.parse(users) && JSON.parse(users).length > 0) {
      allUsers = JSON.parse(users);
    }
    allUsers.push(this.userDetails);
    localStorage.setItem('userDetails', JSON.stringify(allUsers));
    this.router.navigate(['/login']);
  }

  validateEmail(email: any) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
