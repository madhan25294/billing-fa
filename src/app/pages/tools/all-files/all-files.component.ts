import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { GetFiles } from './all-files.model';
import { AllFilesService } from './all-files.service';
import { FILE_PROCESSING_STATUS } from '../../../constants/processing-status';


@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.scss']
})
export class AllFilesComponent implements OnInit {

  public dataList = new MatTableDataSource<GetFiles>();
  public fileStatus: { [key: number]: string } = FILE_PROCESSING_STATUS;
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
      this.snackBService.error("Error occured");
    });

  }

  public updateFileStatus(element: any) {
    const userAction = (element.fileProcessStatus === 0 ? 'R' : (element.fileProcessStatus === 2 ? 'V' : 'P'));
    const fileData = { fileID: element.id, userAction: userAction, userName: 'mkumbhar' };
    this.allFilesService.updateFileStatus(fileData)
      .subscribe((data) => {
        this.snackBService.success(data);
        this.getAllFiles();
      }, (err: HttpErrorResponse) => {
        this.snackBService.error("Error occured");
      });
  }


}
