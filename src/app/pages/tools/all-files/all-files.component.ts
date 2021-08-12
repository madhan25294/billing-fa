import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.scss']
})
export class AllFilesComponent implements OnInit {
  public dataList = new MatTableDataSource();
  public displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'website'];

  constructor() { }

  ngOnInit(): void {
    this.dataList.data  =   [
      {id: 1, name: 'Rajesh', email: 'rajesh@gmail.com',phone:'2323223',website:'www.web.com'},
      {id:2, name: 'Paresh', email: 'paresh@gmail.com',phone:'2323223',website:'www.web.com'},
      {id:3, name: 'sdssd', email: 'sdssd@gmail.com',phone:'2323223',website:'www.web.com'},
      {id:4, name: 'sdf', email: 'sdf@gmail.com',phone:'2323223',website:'www.web.com'},
      {id:5, name: 'Paasdresh', email: 'Paasdresh@gmail.com',phone:'2323223',website:'www.web.com'},
      {id:6, name: 'ht', email: 'ssds@gmail.com',phone:'2323223',website:'www.web.com'},
    ];
  }

}
