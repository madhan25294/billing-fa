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

  // public dataList = new MatTableDataSource(); 
  public dataList = new MatTableDataSource<GetFiles>();

  public displayedColumns: string[] = ['fileName', 'source', 'receivedFileStatus', 'validateFileStatus', 'processedFileStatus', 'fileProcessStatus'];

  constructor(private allFilesService: AllFilesService, private snackBService: SnackBarService) {
  }

  ngOnInit(): void {

    this.getAllFiles();
  }

  public getAllFiles() {
    // required for service testing
    // this.allFilesService.getFiles().subscribe((data) => {
    //   this.dataList.data = data || [];
    // }, (err: HttpErrorResponse) => {
    //   this.snackBService.openSnackBar(err.error, '');
    // });

    const data = [
      {
        "id": 2,
        "fileName": "sis_monthly_bill-20190501-3501.csv",
        "source": "Signature (SIS) - Monthly",
        "sourceId": 76,
        "periodId": 259,
        "receivedFileStatus": true,
        "receivedFileDate": "2021-08-12T08:58:40.72",
        "validateFileDate": null,
        "processedFileDate": null,
        "validateFileStatus": false,
        "processedFileStatus": false,
        "fileProcessStatus": 1,
        "fileProcessStatusDesc": "File Importing",
        "receivedUserName": "Masuk",
        "processedUserName": null,
        "validatedUserName": null
      },

      {
        "id": 4,
        "fileName": "SIS_Week_1_20210811_4501.csv",
        "source": "Signature (SIS) - Week 1",
        "sourceId": 77,
        "periodId": 259,
        "receivedFileStatus": true,
        "receivedFileDate": "2021-08-11T14:09:04.117",
        "validateFileDate": "2021-08-11T14:09:04.117",
        "processedFileDate": null,
        "validateFileStatus": true,
        "processedFileStatus": false,
        "fileProcessStatus": 1,
        "fileProcessStatusDesc": "File Importing",
        "receivedUserName": "animanchikanti",
        "processedUserName": null,
        "validatedUserName": null
      },
      {
        "id": 5,
        "fileName": "SIS_Week2_20210811_7501.csv",
        "source": "Signature (SIS) - Week 2",
        "sourceId": 78,
        "periodId": 259,
        "receivedFileStatus": true,
        "receivedFileDate": "2021-08-11T14:13:33.257",
        "validateFileDate": "2021-08-11T14:13:33.257",
        "processedFileDate": null,
        "validateFileStatus": true,
        "processedFileStatus": false,
        "fileProcessStatus": 1,
        "fileProcessStatusDesc": "File Importing",
        "receivedUserName": "animanchikanti",
        "processedUserName": null,
        "validatedUserName": null
      },
      {
        "id": 6,
        "fileName": "SIS_Week_3_20210811_6501.csv",
        "source": "Signature (SIS) - Week 3",
        "sourceId": 79,
        "periodId": 259,
        "receivedFileStatus": true,
        "receivedFileDate": "2021-08-11T14:24:35.56",
        "validateFileDate": "2021-08-11T14:24:35.577",
        "processedFileDate": null,
        "validateFileStatus": true,
        "processedFileStatus": false,
        "fileProcessStatus": 1,
        "fileProcessStatusDesc": "File Importing",
        "receivedUserName": "animanchikanti",
        "processedUserName": null,
        "validatedUserName": null
      },
      {
        "id": 7,
        "fileName": "SIS_Week_4_20210811_5501.csv",
        "source": "Signature (SIS) - Week 4",
        "sourceId": 80,
        "periodId": 259,
        "receivedFileStatus": true,
        "receivedFileDate": "2021-08-11T14:28:17.17",
        "validateFileDate": "2021-08-11T14:28:51.797",
        "processedFileDate": "2021-08-11T14:29:26.6",
        "validateFileStatus": true,
        "processedFileStatus": true,
        "fileProcessStatus": 1,
        "fileProcessStatusDesc": "File Importing",
        "receivedUserName": "animanchikanti",
        "processedUserName": null,
        "validatedUserName": null
      },
      {
        "id": 8,
        "fileName": "SIS_Week_5_20210811_4301.csv",
        "source": "Signature (SIS) - Week 5",
        "sourceId": 81,
        "periodId": 259,
        "receivedFileStatus": true,
        "receivedFileDate": "2021-08-12T07:53:31.763",
        "validateFileDate": "2021-08-12T07:57:18.073",
        "processedFileDate": "2021-08-12T07:55:46.98",
        "validateFileStatus": true,
        "processedFileStatus": true,
        "fileProcessStatus": 1,
        "fileProcessStatusDesc": "File Importing",
        "receivedUserName": "mbalasubramanian",
        "processedUserName": "mbalasubramanian",
        "validatedUserName": "mbalasubramanian"
      },
      {
        "id": 9,
        "fileName": "SIS_Week_6_20210811_4201.csv",
        "source": "Signature (SIS) - Week 6",
        "sourceId": 82,
        "periodId": 259,
        "receivedFileStatus": true,
        "receivedFileDate": "2021-08-12T08:03:31.523",
        "validateFileDate": "2021-08-12T10:40:54.223",
        "processedFileDate": "2021-08-13T07:32:43.003",
        "validateFileStatus": true,
        "processedFileStatus": true,
        "fileProcessStatus": 2,
        "fileProcessStatusDesc": "File Processing",
        "receivedUserName": "mbalasubramanian",
        "processedUserName": "mbala",
        "validatedUserName": "mbala"
      },
      {
        "id": 10,
        "fileName": "SIS_monthly_rem_20210811_4101.csv",
        "source": "Signature (SIS) - Monthly Remnant",
        "sourceId": 83,
        "periodId": 259,
        "receivedFileStatus": false,
        "receivedFileDate": null,
        "validateFileDate": null,
        "processedFileDate": null,
        "validateFileStatus": false,
        "processedFileStatus": false,
        "fileProcessStatus": 1,
        "fileProcessStatusDesc": null,
        "receivedUserName": null,
        "processedUserName": null,
        "validatedUserName": null
      }


    ]

    this.dataList.data = data;


  }


}
