import { Component, OnInit } from '@angular/core';
// services
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {
  users: any;
  constructor(private commonSvc: CommonService) {
    this.getUsers()
   }

  ngOnInit(): void {
  }

  getUsers() {
    this.commonSvc.getUsersData()
    .subscribe((result: any) => {
      this.users = result;
    }, err => {
      alert('Unable to get the data')
    })
  }

}
