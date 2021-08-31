import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ERROR_MESSAGES } from '../../../constants/data-import';
// models
import { MatTableDataSource } from '@angular/material/table';
import { SnackBarService } from 'src/app/services/snack-bar.service';
// services
import { DataImportService } from './data-import.service';
import { ConstantService } from '../../../services/constant.service';

@Component({
  selector: 'app-data-import',
  templateUrl: './data-import.component.html',
  styleUrls: ['./data-import.component.scss']
})
export class DataImportComponent implements OnInit {
  inputDataObj: { [key: string]: any; };
  srcType: Array<any>;
  public dataList = new MatTableDataSource();
  public displayedColumns: string[] = ['id', 'fileName', 'processedFileDate', 'validateFileDate', 'receivedFileDate', 'validatedUserName', 'logs'];

  constructor(
    private snackBService: SnackBarService,
    private dataImportService: DataImportService,
    private constantService: ConstantService,
    public dialog: MatDialog) {
    const currentDate = new Date();
    this.inputDataObj = {
      searchText: '',
      srcType: 'all',
      srcTypeId: '0',
      billingPeriod: {
        startDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        endDate: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
      }
    }
    this.srcType = [];
  }

  ngOnInit() {
    this.getAllSourceTypes();
  }

  searchItems() {
    this.dataImportService.getImportDataFiles(this.inputDataObj.searchText, this.inputDataObj.srcTypeId,
      this.constantService.getFormattedDate(this.inputDataObj.billingPeriod.startDate), this.constantService.getFormattedDate(this.inputDataObj.billingPeriod.endDate))
      .subscribe((searchedResults) => {
        // this.snackBService.success('', '');
        this.dataList.data = searchedResults || [];
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }

  getAllSourceTypes() {
    this.dataImportService.getSourceTypes()
      .subscribe((sourceTypes) => {
        // this.snackBService.success('', '');
        this.srcType = sourceTypes || [];
        this.searchItems();
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }

  openDialog(selectedData: { [key: string]: any; }) {
    const dialogRef = this.dialog.open(ViewLogsDialogContent,
      {
        data: {
          modelData: selectedData
        },
        width: '600px',
        height: '400px',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openLogs(selectedRow: { [key: string]: any; }) {
    this.dataImportService.getViewLogsData(selectedRow.id, selectedRow.sourceId, selectedRow.periodId)
      .subscribe((viewLogData) => {
        this.openDialog(viewLogData);
      }, err => {
        this.snackBService.error(err.error, '');
      })
  }

}

@Component({
  selector: 'viewlogs-dialog-content',
  templateUrl: 'viewlogs-dialog-content.html',
  styleUrls: ['./data-import.component.scss']
})
export class ViewLogsDialogContent {
  displayedColumns: string[];
  dataSource: Array<any>;
  keyValues: { [key: string]: any; };
  constructor(@Inject(MAT_DIALOG_DATA) public data: { [key: string]: any; }) {
    this.displayedColumns = this.data.modelData.logs[0] ? Object.keys(this.data.modelData.logs[0]) : [];
    this.dataSource = this.data.modelData.logs;
    this.keyValues = {
      sourceDesc: this.data.modelData.sourceDesc || '',
      importedDatetime: this.data.modelData.importedDatetime || '',
      periodID: this.data.modelData.periodID || '',
      fromDate: this.data.modelData.fromDate || '',
      toDate: this.data.modelData.toDate || '',
      fullPathTransFileName: this.data.modelData.fullPathTransFileName || '',
      rowsOnFile: this.data.modelData.rowsOnFile || '',
      rowsWithError: this.data.modelData.rowsWithError || '',
      rowsImported: this.data.modelData.rowsImported || '',
      totalDollars: this.data.modelData.totalDollars || '',
      quantity: this.data.modelData.quantity || '',
    }
  }


}
