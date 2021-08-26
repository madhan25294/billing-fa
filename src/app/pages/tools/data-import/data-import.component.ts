import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
      .subscribe((result: any) => {
        this.snackBService.success('', '');
        this.dataList.data = result || [];
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }

  getAllSourceTypes() {
    this.dataImportService.getSourceTypes()
      .subscribe((result: any) => {
        // this.snackBService.success('', '');
        this.srcType = result || [];
        this.searchItems();
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentDialog,
      {
        data: {
          logs: 'logs'
        },
        panelClass: 'custom-dialog-container'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openLogs() {
    this.openDialog();
  }

}

@Component({
  selector: 'dialog-content.html',
  templateUrl: 'dialog-content.html',
})
export class DialogContentDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
