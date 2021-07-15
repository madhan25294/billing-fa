import { Component, OnInit, ViewChild } from '@angular/core';
// services
import { CommonService } from '../services/common.service';
import * as XLSX from 'xlsx';
declare var $: any;

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  @ViewChild('closeModelButton') closeModelButton: any;
  users: any;
  searchVariable: any;
  searchBy: any;
  customerInfo: any;

  constructor(private commonSvc: CommonService) {
    this.users = [];
    this.getUsers();
    this.searchVariable = '';
    this.searchBy = 'companyName';
    this.initCustInfo();
  }

  initCustInfo() {
    this.customerInfo = {
      id: '',
      managerName: '',
      address: '',
      company: ''
    }
  }

  ngOnInit() {
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

  exportexcel() {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'ExcelSheet.xlsx');

  }

  addCustomer() {
    this.users.push({
      custId: this.customerInfo.id,
      accountManagerName: this.customerInfo.managerName,
      addressDetails: this.customerInfo.address,
      companyName: this.customerInfo.company
    })
    this.closeModelButton.nativeElement.click();
  }

}
