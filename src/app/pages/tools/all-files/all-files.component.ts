import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.scss']
})
export class AllFilesComponent implements OnInit {
  public dataList = new MatTableDataSource();
  public displayedColumns: string[] = ['transFileName', 'sourceDesc', 'isImported', 'isValidated', 'isLoaded', 'userAction'];

  constructor() { }

  ngOnInit(): void {

    const data = [
      {
        "id": 1,
        "transFileName": "File Name1.json",
        "sourceDesc": "Signature (SIS) Week 1",
        "isImported": false,
        "isValidated": false,
        "isLoaded": false,
        "userAction": "R",
        "userName": "User Name"
      },
      {
        "id": 2,
        "transFileName": "File Name2.json",
        "sourceDesc": "Signature (SIS) Week 2 Signature",
        "isImported": false,
        "isValidated": false,
        "isLoaded": false,
        "userAction": "R",
        "userName": "User Name2"
      },
      {
        "id": 3,
        "transFileName": "File Name3.json",
        "sourceDesc": "Signature (SIS) Week 1 Signature",
        "isImported": true,
        "isValidated": false,
        "isLoaded": false,
        "userAction": "V",
        "userName": "User Name3"
      },
      {
        "id": 4,
        "transFileName": "File Name4.json",
        "sourceDesc": "Signature (SIS) Week 1",
        "isImported": true,
        "isValidated": false,
        "isLoaded": false,
        "userAction": "V",
        "userName": "User Name4"
      },
      {
        "id": 5,
        "transFileName": "File Name5.json",
        "sourceDesc": "Signature (SIS) Week 1",
        "isImported": true,
        "isValidated": true,
        "isLoaded": false,
        "userAction": "P",
        "userName": "User Name1"
      },
      {
        "id": 6,
        "transFileName": "File Name6.json",
        "sourceDesc": "Signature (SIS) Week 1",
        "isImported": true,
        "isValidated": true,
        "isLoaded": false,
        "userAction": "P",
        "userName": "User Name6"
      },
      {
        "id": 7,
        "transFileName": "File Name7.json",
        "sourceDesc": "Signature (SIS) Week 2",
        "isImported": true,
        "isValidated": true,
        "isLoaded": true,
        "userAction": "FP",
        "userName": "User Name7"
      },
      {
        "id": 8,
        "transFileName": "File Name8.json",
        "sourceDesc": "Signature (SIS) last Week 2",
        "isImported": true,
        "isValidated": true,
        "isLoaded": true,
        "userAction": "FP",
        "userName": "User Name8"
      },
      {
        "id": 9,
        "transFileName": "File Name9.json",
        "sourceDesc": "Signature (SIS) next Week 2",
        "isImported": true,
        "isValidated": true,
        "isLoaded": true,
        "userAction": "FP",
        "userName": "User Name9"
      }
    ];

    this.dataList.data = data;
  }

}
