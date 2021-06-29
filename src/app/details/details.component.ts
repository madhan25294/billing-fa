import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  usersList: any;

  constructor() {
    const users: any = localStorage.getItem('userDetails');
    this.usersList = JSON.parse(users);
  }

  ngOnInit(): void {
  }

}
