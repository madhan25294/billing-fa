import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { StatusDialogComponent } from '../../status-dialog/status-dialog.component';
import { FileStatusTypes, SourceTypes, ImportFileDetails } from '../../tools.model';
import { ToolsService } from '../../tools.service';

@Component({
  selector: 'app-pending-data',
  templateUrl: './pending-data.component.html',
  styleUrls: ['./pending-data.component.scss']
})
export class PendingDataComponent implements OnInit {
  public searchText: string = '';
  public statusTypes: Array<FileStatusTypes>;
  public sourceTypes: Array<SourceTypes>;
  public pendingDataList = new MatTableDataSource<ImportFileDetails>();
  public loading: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns: string[] = ['fileId','fileName','sourceId', 'fileType', 'sourceDescription', 'fileCurrentStatus', 'forwardAction', 'backwardAction'];
  public totalSize:number=50;
  public filterObj = {
    "fileCurrentStatusId": 0,
    "pageSize": 10,
    "pageNumber" :1,
    "sortColumnId":1
  }

  public modifiedBy = [] = [{ value: '1', viewValue: 'user 1' },
  { value: '2', viewValue: 'user 2' },
  { value: '3', viewValue: 'user 3' },
  { value: '4', viewValue: 'user 4' }];



  constructor(private toolService: ToolsService, private snackBService: SnackBarService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
   this.getSourceTypes();
  }
  public getSourceTypes() {
    this.toolService.getSourceTypes().subscribe((data) => {
      this.sourceTypes = data;
      this.getImportFileStatuses();
    }, (err: HttpErrorResponse) => {
      this.snackBService.error("Error occured to get SourceTypes");
    });
  }

  public getImportFileStatuses() {
    this.toolService.getImportFileStatuses().subscribe((data) => {
      this.statusTypes = data;
      this.getAllFiles();
    }, (err: HttpErrorResponse) => {
      this.snackBService.error("Error occured to get ImportFileStatuses");
    });
  }

  public pageChanged(e: PageEvent){
    this.loading = true;

    this.filterObj.pageNumber = e.pageIndex;
    this.filterObj.pageSize = e.pageSize;
    this.getAllFiles();

  }
  public getAllFiles() {
    this.toolService.getImportFileDetails(this.filterObj).subscribe((response:any) => {
      this.pendingDataList.data = response.rows;
      this.totalSize = response.count;
    }, (err: HttpErrorResponse) => {
      this.snackBService.error("Error occured to get ImportFileDetails");
    });
   }

  public onClickValidateDialog(index: number) {
    this.dialog.open(StatusDialogComponent, {
      width: "30%",
      data: {
        title: 'Billing Discount for ' + this.pendingDataList.data[index].fileName,
        id: this.pendingDataList.data[index].fileId,

      }
    }).afterClosed().subscribe(result => {
      if (result) {
        // result processing
      }
    })

  }

}
