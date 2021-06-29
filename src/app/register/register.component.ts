import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userDetails: any;
  constructor(private router: Router) {
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
    let allUsers: any = [];
    const users: any = localStorage.getItem('userDetails')
    if (JSON.parse(users) && JSON.parse(users).length > 0) {
      allUsers = JSON.parse(users);
    }
    allUsers.push(this.userDetails);
    localStorage.setItem('userDetails', JSON.stringify(allUsers));
    this.router.navigate(['/login']);
  }
}
