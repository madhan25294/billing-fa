import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-data-import',
  templateUrl: './data-import.component.html',
  styleUrls: ['./data-import.component.scss']
})
export class DataImportComponent implements OnInit {
  selected: string;
  dateRange: { [key: string]: string; };
  srcType: Array<any>;
  selectedSrcType: string;
  public dataList = new MatTableDataSource();
  public displayedColumns: string[] = ['no', 'sourcename', 'processedDate', 'verifiedDate', 'receivedDate', 'verifiedBy', 'logs'];

  constructor(private snackBar: MatSnackBar) {
    this.selected = ''
    this.dateRange = {
      startDate: '',
      endDate: ''
    }
    this.srcType = [
      { name: 'All', val: 'all' },
      { name: '45-ELS-Week 2 DTreeEQ', val: '45_ELS_Week_2_DTreeEQ'},
      { name: '46-ELS-Week 3 DTreeEQ', val: '46_ELS_Week_3_ DTreeEQ'},
      { name: '47-ELS-Week 4 DTreeEQ', val: '47_ELS_Week_4_ DTreeEQ'},
      { name: '48-ELS-Week 5 DTreeEQ', val: '48_ELS_Week_5_ DTreeEQ'},
      { name: '76-Signature (SIS) - Monthly', val: '76_Signature_(SIS)_Monthly'},
      { name: '77-Signature (SIS) - Week 1', val: '77_Signature_(SIS)_Week 1'},
      { name: '78-Signature (SIS) - Week 2', val: '78_Signature_(SIS)_Week 2'},
      { name: '79-Signature (SIS) - Week 3', val: '79_Signature_(SIS)_Week 3'},
      { name: '80-Signature (SIS) - Week 4', val: '80_Signature_(SIS)_Week 4'},
    ];
    this.selectedSrcType = 'all';
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
    this.snackBar.open('Its Working', 'Splash', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 2000
    });
  }

}
