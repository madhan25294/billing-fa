import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

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

  constructor(private _snackBar: MatSnackBar) {
    this.dateRange = {
      startDate: '',
      endDate: ''
    }
  }

  ngOnInit() {
    this.dataList.data = [
      { no: 1, sourcename: 'File 1', processedDate: 'July 30th', verifiedDate: 'Aug 2nd', receivedDate: 'Aug 4th', verifiedBy: 'Lead User', logs: 'View Log' },
      { no: 2, sourcename: 'File 2', processedDate: 'July 30th', verifiedDate: 'Aug 2nd', receivedDate: 'Aug 4th', verifiedBy: 'Lead User', logs: 'View Log' },
      { no: 3, sourcename: 'File 3', processedDate: 'July 30th', verifiedDate: 'Aug 2nd', receivedDate: 'Aug 4th', verifiedBy: 'Lead User', logs: 'View Log' },
      { no: 4, sourcename: 'File 4', processedDate: 'July 30th', verifiedDate: 'Aug 2nd', receivedDate: 'Aug 4th', verifiedBy: 'Lead User', logs: 'View Log' },
      { no: 5, sourcename: 'File 5', processedDate: 'July 30th', verifiedDate: 'Aug 2nd', receivedDate: 'Aug 4th', verifiedBy: 'Lead User', logs: 'View Log' },
      { no: 6, sourcename: 'File 6', processedDate: 'July 30th', verifiedDate: 'Aug 2nd', receivedDate: 'Aug 4th', verifiedBy: 'Lead User', logs: 'View Log' },
    ];
  }

  searchItems() {
    this.openSnackBar()
  }

  openSnackBar() {
    this._snackBar.open('Working', 'Splash', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }

}
