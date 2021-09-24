import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { GetImportFiles, GetSourceTypes } from '../../tools.model';
import { ToolsService } from '../../tools.service';

@Component({
  selector: 'app-pending-data',
  templateUrl: './pending-data.component.html',
  styleUrls: ['./pending-data.component.scss']
})
export class PendingDataComponent implements OnInit {
  public searchText: string = '';
  public sourceTypes: Array<GetSourceTypes>;
  public pendingDataList = new MatTableDataSource<GetImportFiles>();
  public displayedColumns: string[] = ['fileName', 'invoiceType', 'folderId', 'sendMethod', 'importType', 'fileType', 'sourceType', 'ownerType', 'ownerEmail', 'fileProcessStatus', 'action1', 'action2'];
  public searchFilterObj = {
    "fileCurrentStatusId": 0
  };

  public invoiceType = [] = [{ value: '1', viewValue: 'invoice 1' },
  { value: '2', viewValue: 'invoice 2' },
  { value: '3', viewValue: 'invoice 3' },
  { value: '4', viewValue: 'invoice 4' }];


  public statusType = [] = [{ value: '1', viewValue: 'status 1' },
  { value: '2', viewValue: 'status 2' },
  { value: '3', viewValue: 'status 3' },
  { value: '4', viewValue: 'status 4' }];

    constructor(private toolService: ToolsService, private snackBService: SnackBarService) { 
    }

  ngOnInit(): void {
    this.getSourceTypes();
    this.getAllFiles();
  }
  public getSourceTypes() {
    this.toolService.getSourceTypes().subscribe((data) => {
      this.sourceTypes = data;
    }, (err: HttpErrorResponse) => {
      this.snackBService.error("Error occured to get SourceTypes");
    });
  }
  public getAllFiles() {
    this.pendingDataList.data = [{ 'id': 0, 'fileName': "file 1", 'invoiceType': "data trace", 'folderId': 8, 'sendMethod': "ftp", 'importType': "automated", "fileType": 'csv', 'sourceType': "5-tele tax", 'ownerType': "internal", 'ownerEmail': "owner@firstam.com", 'fileProcessStatus': "Received" },
    { "id": 1, "fileName": "file 2", "invoiceType": "data trace 2", "folderId": 1, "sendMethod": "filezilla", "importType": 'automated', 'fileType': "file Type ", "sourceType": "1-tele tax", "ownerType": "internal type", "ownerEmail": "owner1@firstam.com", "fileProcessStatus": "Validated" },
    { "id": 2, "fileName": "file 3", "invoiceType": "data trace 2", "folderId": 1, "sendMethod": "filezilla", "importType": 'automated', 'fileType': "file Type ", "sourceType": "1-tele tax", "ownerType": "internal type", "ownerEmail": "owner1@firstam.com", "fileProcessStatus": "Returned" },
    { "id": 4, "fileName": "file 5", "invoiceType": "data trace 2", "folderId": 1, "sendMethod": "filezilla", "importType": 'automated', 'fileType': "file Type ", "sourceType": "1-tele tax", "ownerType": "internal type", "ownerEmail": "owner1@firstam.com", "fileProcessStatus": "Processed" }];
  }

}
