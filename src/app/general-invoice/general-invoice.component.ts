import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-invoice',
  templateUrl: './general-invoice.component.html',
  styleUrls: ['./general-invoice.component.scss']
})
export class GeneralInvoiceComponent implements OnInit {
  gridData: any;
  constructor() { 
    this.gridData = Array.from(Array(100).keys());
  }

  ngOnInit(): void {
  }

}
