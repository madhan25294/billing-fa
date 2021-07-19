import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-invoice',
  templateUrl: './general-invoice.component.html',
  styleUrls: ['./general-invoice.component.scss']
})
export class GeneralInvoiceComponent implements OnInit {
  gridData: any;
  constructor() { 
    // this.gridData = Array.from(Array(100).keys());
    this.gridData = [];
    this.initGridData();
  }

  initGridData() {
   for (let i = 0; i < 100; i++) {
    this.gridData.push({
      Line: i,
      GL: i,
      Text: i,
      Cost: i,
      Qty: i,
      Rate: i,
      Ext: i,
      GroupHead: i,
      GroupID: i,
      CreditMemo: i
    })
   }
  }

  ngOnInit(): void {
  }

}
