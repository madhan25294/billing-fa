import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-import',
  templateUrl: './data-import.component.html',
  styleUrls: ['./data-import.component.scss']
})
export class DataImportComponent implements OnInit {
  selected: any;
  dateRange: any;
  public dataList = new MatTableDataSource();
  public displayedColumns: string[] = ['no', 'sourcename', 'processedDate', 'verifiedDate', 'receivedDate', 'verifiedBy', 'logs'];

  constructor() {
    this.dateRange = {
      startDate: '',
      endDate: ''
    }
  }

  ngOnInit() {
    this.dataList.data  =   [
      {no:1, sourcename: 'madhan', processedDate: 'rajesh@gmail.com',verifiedDate:'2323223',receivedDate:'www.web.com', verifiedBy: 'Lead User', logs: 'View Log'},
      {no:2, sourcename: 'Paresh', processedDate: 'paresh@gmail.com',verifiedDate:'2323223',receivedDate:'www.web.com', verifiedBy: 'Lead User', logs: 'View Log'},
      {no:3, sourcename: 'sdssd', processedDate: 'sdssd@gmail.com',verifiedDate:'2323223',receivedDate:'www.web.com', verifiedBy: 'Lead User', logs: 'View Log'},
      {no:4, sourcename: 'sdf', processedDate: 'sdf@gmail.com',verifiedDate:'2323223',receivedDate:'www.web.com', verifiedBy: 'Lead User', logs: 'View Log'},
      {no:5, sourcename: 'Paasdresh', processedDate: 'Paasdresh@gmail.com',verifiedDate:'2323223',receivedDate:'www.web.com', verifiedBy: 'Lead User', logs: 'View Log'},
      {no:6, sourcename: 'ht', processedDate: 'ssds@gmail.com',verifiedDate:'2323223',receivedDate:'www.web.com', verifiedBy: 'Lead User', logs: 'View Log'},
    ];
  }

  searchItems() {
  }

}
