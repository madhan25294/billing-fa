import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { GetFiles } from './all-files.model';
import { AllFilesService } from './all-files.service';

@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.scss']
})
export class AllFilesComponent implements OnInit {

  public dataList = new MatTableDataSource<GetFiles>();

  public displayedColumns: string[] = ['fileName', 'source', 'receivedFileStatus', 'validateFileStatus', 'processedFileStatus', 'fileProcessStatus'];

  constructor(private allFilesService: AllFilesService, private snackBService: SnackBarService) {
  }

  ngOnInit(): void {

    this.getAllFiles();
  }

  public getAllFiles() {
    this.allFilesService.getFiles().subscribe((data) => {
      this.dataList.data = data || [];
    }, (err: HttpErrorResponse) => {
      this.snackBService.openSnackBar(err.error, 'close');
    });

  }

  public updateFileStatus(element: object) {
   
  }


}
