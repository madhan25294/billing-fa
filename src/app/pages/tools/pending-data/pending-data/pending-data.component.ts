import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GetImportFiles } from '../../tools.model';

@Component({
  selector: 'app-pending-data',
  templateUrl: './pending-data.component.html',
  styleUrls: ['./pending-data.component.scss']
})
export class PendingDataComponent implements OnInit {
  public searchText: string='';
  public pendingDataLst = new MatTableDataSource<GetImportFiles>();
  public displayedColumns: string[] = ['fileName', 'invoiceType', 'folderId', 'sendMethod', 'importType', 'fileType', 'sourceType', 'ownerType','ownerEmail', 'fileProcessStatus','id'];

  public sourceType = [] =  [{ value: '1', viewValue: 'Source 1' },
  { value: '2', viewValue: 'Source 2' },
  { value: '3', viewValue: 'Source 3' },
  { value: '4', viewValue: 'Source 4' }];

  
  public invoiceType = [] =  [{ value: '1', viewValue: 'invoice 1' },
  { value: '2', viewValue: 'invoice 2' },
  { value: '3', viewValue: 'invoice 3' },
  { value: '4', viewValue: 'invoice 4' }];

  
  public statusType = [] =  [{ value: '1', viewValue: 'status 1' },
  { value: '2', viewValue: 'status 2' },
  { value: '3', viewValue: 'status 3' },
  { value: '4', viewValue: 'status 4' }];

  constructor() { }

  ngOnInit(): void {
    this.getAllFiles();
  }
  public getAllFiles() {
    this.pendingDataLst.data = [{'id':0,'fileName':"file 1 goes here",'invoiceType':"data trace",'folderId':8,'sendMethod':"ftp",'importType':"automated","fileType":'csv','sourceType':"5-tele tax",'ownerType':"internal",'ownerEmail':"owner@firstam.com",'fileProcessStatus':"Received"},
    {"id":1,"fileName":"file 2 goes here","invoiceType":"data trace 2","folderId":1,"sendMethod":"filezilla","importType":'automated','fileType':"file Type ","sourceType":"1-tele tax","ownerType":"internal type","ownerEmail":"owner1@firstam.com","fileProcessStatus":"Received"}];

    

  }

}
