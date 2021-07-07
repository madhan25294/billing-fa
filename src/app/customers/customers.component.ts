import { Component, OnInit } from '@angular/core';
// services
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  users: any;
  constructor(private commonSvc: CommonService) {
    this.getUsers()
  }

  ngOnInit(): void {
  }

  getUsers() {
    this.users = [
      {
        "custId": 110001,
        "accountManagerName": "Doreen Kimberly Tonarelli",
        "addressDetails": "Inland Empire Division, Riverside, CA",
        "companyName": "Ticor Title Company of California"
      },
      {
        "custId": 110003,
        "accountManagerName": "Doreen Kimberly Tonarelli",
        "addressDetails": "560 E. Hospitality Lane, San Bernardino, CA",
        "companyName": "Chicago Title Company"
      },
      {
        "custId": 110006,
        "accountManagerName": "Doreen Kimberly Tonarelli",
        "addressDetails": "451 East Vanderbilt Way, Suite 350, San Bernardino, CA",
        "companyName": "Fidelity National Title Insurance Company"
      },
      {
        "custId": 110007,
        "accountManagerName": "Doreen Kimberly Tonarelli",
        "addressDetails": "3625 Fourteenth Street, Riverside, CA",
        "companyName": "First American Title Company"
      },
      {
        "custId": 110017,
        "accountManagerName": "Christi Cipriani",
        "addressDetails": "7065 Indiana Ave Ste 100, Riverside, CA",
        "companyName": "Stewart Title Company"
      }
    ]
    // this.commonSvc.getUsersData()
    // .subscribe((result: any) => {
    //   this.users = result;
    // }, err => {
    //   alert('Unable to get the data')
    // })
  }

}
