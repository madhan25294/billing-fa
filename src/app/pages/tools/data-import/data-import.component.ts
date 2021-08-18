import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SnackBarService } from 'src/app/services/snack-bar.service';


@Component({
  selector: 'app-data-import',
  templateUrl: './data-import.component.html',
  styleUrls: ['./data-import.component.scss']
})
export class DataImportComponent implements OnInit {
  selected: string;
  dateRange: { [key: string]: any; };
  srcType: Array<any>;
  selectedSrcType: number | string;
  public dataList = new MatTableDataSource();
  public displayedColumns: string[] = ['id', 'fileName', 'processedFileDate', 'validateFileDate', 'receivedFileDate', 'validatedUserName'];

  constructor(private snackBService: SnackBarService) {
    this.selected = ''
    const currentDate = new Date();
    this.dateRange = {
      startDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      endDate: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
    }

    this.srcType = [
      {
        "transSourceId": 2,
        "sourceDesc": "ATS10 Feed"
      },
      {
        "transSourceId": 5,
        "sourceDesc": "TeleTax"
      },
      {
        "transSourceId": 8,
        "sourceDesc": "Starter Exchange"
      },
      {
        "transSourceId": 12,
        "sourceDesc": "SOS - Corp"
      },
      {
        "transSourceId": 13,
        "sourceDesc": "SOS - Limited"
      },
      {
        "transSourceId": 14,
        "sourceDesc": "SOS - Notary"
      },
      {
        "transSourceId": 15,
        "sourceDesc": "ATS Tax Feed - CO3"
      },
      {
        "transSourceId": 16,
        "sourceDesc": "ATS Tax Feed (CO)"
      },
      {
        "transSourceId": 19,
        "sourceDesc": "Court Searches"
      },
      {
        "transSourceId": 20,
        "sourceDesc": "AIS NY : NYC Billing (1)"
      },
      {
        "transSourceId": 21,
        "sourceDesc": "AIS NY : Nassau and Suffolk Billing (2)"
      },
      {
        "transSourceId": 22,
        "sourceDesc": "AIS NY : Westchester Billing (3)"
      },
      {
        "transSourceId": 23,
        "sourceDesc": "AIS NY : Richmond Billing (4)"
      },
      {
        "transSourceId": 24,
        "sourceDesc": "AIS NY : Hyper Billing (5)"
      },
      {
        "transSourceId": 25,
        "sourceDesc": "AIS NY : OMA Billing (6)"
      },
      {
        "transSourceId": 26,
        "sourceDesc": "AIS NY : ATT Billing (7)"
      },
      {
        "transSourceId": 27,
        "sourceDesc": "AIS NY : AIS Billing (8)"
      },
      {
        "transSourceId": 28,
        "sourceDesc": "AIS NY : OMA Billing #2 (6)"
      },
      {
        "transSourceId": 29,
        "sourceDesc": "AIS NY : OMA Billing #3 (6)"
      },
      {
        "transSourceId": 30,
        "sourceDesc": "AIS NY : OMA Billing #4 (6)"
      },
      {
        "transSourceId": 31,
        "sourceDesc": "AIS NY : AIS Billing #2 (8)"
      },
      {
        "transSourceId": 32,
        "sourceDesc": "AIS NY : AIS Billing #3 (8)"
      },
      {
        "transSourceId": 33,
        "sourceDesc": "AIS NY : AIS Billing #4 (8)"
      },
      {
        "transSourceId": 35,
        "sourceDesc": "Data Tree EQ"
      },
      {
        "transSourceId": 36,
        "sourceDesc": "Texas Tax POC 1"
      },
      {
        "transSourceId": 37,
        "sourceDesc": "Texas Tax POC 2"
      },
      {
        "transSourceId": 38,
        "sourceDesc": "Texas Tax POC 3"
      },
      {
        "transSourceId": 39,
        "sourceDesc": "Texas Tax POC 4"
      },
      {
        "transSourceId": 40,
        "sourceDesc": "Data Tree PIQ"
      },
      {
        "transSourceId": 41,
        "sourceDesc": "Title IQ"
      },
      {
        "transSourceId": 44,
        "sourceDesc": "ELS-Week 1 DTreeEQ"
      },
      {
        "transSourceId": 45,
        "sourceDesc": "ELS-Week 2 DTreeEQ"
      },
      {
        "transSourceId": 46,
        "sourceDesc": "ELS-Week 3 DTreeEQ"
      },
      {
        "transSourceId": 47,
        "sourceDesc": "ELS-Week 4 DTreeEQ"
      },
      {
        "transSourceId": 48,
        "sourceDesc": "AIS NY : Nassau and Suffolk Billing (3)"
      },
      {
        "transSourceId": 49,
        "sourceDesc": "AIS NY : Westchester Billing (4)"
      },
      {
        "transSourceId": 50,
        "sourceDesc": "AIS NY : Richmond Billing (5)"
      },
      {
        "transSourceId": 51,
        "sourceDesc": "AIS NY : Hyper Billing (6)"
      },
      {
        "transSourceId": 52,
        "sourceDesc": "ATS Tax Fee – AZ2"
      },
      {
        "transSourceId": 53,
        "sourceDesc": "917 Texas Tax POC 5"
      },
      {
        "transSourceId": 54,
        "sourceDesc": "918 Texas Tax POC 6"
      },
      {
        "transSourceId": 55,
        "sourceDesc": "NW - Week 1"
      },
      {
        "transSourceId": 56,
        "sourceDesc": "NW - Week 2"
      },
      {
        "transSourceId": 57,
        "sourceDesc": "NW - Week 3"
      },
      {
        "transSourceId": 58,
        "sourceDesc": "NW - Week 4"
      },
      {
        "transSourceId": 59,
        "sourceDesc": "NW - Week 5"
      },
      {
        "transSourceId": 60,
        "sourceDesc": "NW Monthly"
      },
      {
        "transSourceId": 61,
        "sourceDesc": "919 Texas Tax POC 7"
      },
      {
        "transSourceId": 62,
        "sourceDesc": "NW Montly 2"
      },
      {
        "transSourceId": 63,
        "sourceDesc": "TIPS"
      },
      {
        "transSourceId": 68,
        "sourceDesc": "Starter Exchange Expanded"
      },
      {
        "transSourceId": 69,
        "sourceDesc": "NW Tree - Week 1"
      },
      {
        "transSourceId": 70,
        "sourceDesc": "NW Tree - Week 2"
      },
      {
        "transSourceId": 71,
        "sourceDesc": "NW Tree - Week 3"
      },
      {
        "transSourceId": 72,
        "sourceDesc": "NW Tree - Week 4"
      },
      {
        "transSourceId": 73,
        "sourceDesc": "NW Tree - Week 5"
      },
      {
        "transSourceId": 74,
        "sourceDesc": "NW Tree Monthly"
      },
      {
        "transSourceId": 75,
        "sourceDesc": "NW Tree Montly 2"
      },
      {
        "transSourceId": 76,
        "sourceDesc": "Signature (SIS) - Monthly"
      },
      {
        "transSourceId": 77,
        "sourceDesc": "Signature (SIS) - Week 1"
      },
      {
        "transSourceId": 78,
        "sourceDesc": "Signature (SIS) - Week 2"
      },
      {
        "transSourceId": 79,
        "sourceDesc": "Signature (SIS) - Week 3"
      },
      {
        "transSourceId": 80,
        "sourceDesc": "Signature (SIS) - Week 4"
      },
      {
        "transSourceId": 81,
        "sourceDesc": "Signature (SIS) - Week 5"
      },
      {
        "transSourceId": 82,
        "sourceDesc": "Signature (SIS) - Week 6"
      },
      {
        "transSourceId": 83,
        "sourceDesc": "Signature (SIS) - Monthly Remnant"
      },
      {
        "transSourceId": 84,
        "sourceDesc": "SOS - Corp - New"
      },
      {
        "transSourceId": 85,
        "sourceDesc": "SOS - Limited - New"
      },
      {
        "transSourceId": 86,
        "sourceDesc": "SOS - Notary - New"
      },
      {
        "transSourceId": 87,
        "sourceDesc": "TaxSource"
      }
    ]
    this.selectedSrcType = 'all';
  }

  ngOnInit() {
    this.dataList.data = [
      {
        "id": 1,
        "fileName": "ELSINVOICE_DT040104302019",
        "sourceId": 44,
        "periodId": "259",
        "receivedFileDate": "2021-08-16T16:48:56",
        "validateFileDate": null,
        "processedFileDate": "2021-08-16T16:11:37.477",
        "validatedUserName": null
      },
      {
        "id": 2,
        "fileName": "sis_monthly_bill-20190501-3501.csv",
        "sourceId": 76,
        "periodId": "259",
        "receivedFileDate": "2021-08-12T08:58:40.72",
        "validateFileDate": null,
        "processedFileDate": null,
        "validatedUserName": null
      },
      {
        "id": 4,
        "fileName": "SIS_Week_1_20210811_4501.csv",
        "sourceId": 77,
        "periodId": "259",
        "receivedFileDate": "2021-08-11T14:09:04.117",
        "validateFileDate": "2021-08-11T14:09:04.117",
        "processedFileDate": null,
        "validatedUserName": null
      },
      {
        "id": 5,
        "fileName": "SIS_Week2_20210811_7501.csv",
        "sourceId": 78,
        "periodId": "259",
        "receivedFileDate": "2021-08-11T14:13:33.257",
        "validateFileDate": "2021-08-11T14:13:33.257",
        "processedFileDate": null,
        "validatedUserName": null
      },
      {
        "id": 6,
        "fileName": "SIS_Week_3_20210811_6501.csv",
        "sourceId": 79,
        "periodId": "259",
        "receivedFileDate": "2021-08-11T14:24:35.56",
        "validateFileDate": "2021-08-11T14:24:35.577",
        "processedFileDate": null,
        "validatedUserName": null
      },
      {
        "id": 7,
        "fileName": "SIS_Week_4_20210811_5501.csv",
        "sourceId": 80,
        "periodId": "259",
        "receivedFileDate": "2021-08-11T14:28:17.17",
        "validateFileDate": "2021-08-11T14:28:51.797",
        "processedFileDate": "2021-08-11T14:29:26.6",
        "validatedUserName": null
      },
      {
        "id": 8,
        "fileName": "SIS_Week_5_20210811_4301.csv",
        "sourceId": 81,
        "periodId": "259",
        "receivedFileDate": "2021-08-12T07:53:31.763",
        "validateFileDate": "2021-08-12T07:57:18.073",
        "processedFileDate": "2021-08-12T07:55:46.98",
        "validatedUserName": "mbalasubramanian"
      },
      {
        "id": 9,
        "fileName": "SIS_Week_6_20210811_4201.csv",
        "sourceId": 82,
        "periodId": "259",
        "receivedFileDate": "2021-08-12T08:03:31.523",
        "validateFileDate": "2021-08-12T10:40:54.223",
        "processedFileDate": "2021-08-13T07:32:43.003",
        "validatedUserName": "mbala"
      },
      {
        "id": 10,
        "fileName": "SIS_monthly_rem_20210811_4101.csv",
        "sourceId": 83,
        "periodId": "259",
        "receivedFileDate": "2021-08-16T17:15:26.493",
        "validateFileDate": null,
        "processedFileDate": null,
        "validatedUserName": null
      }
    ]

  }

  searchItems() {
    this.openSnackBar()

  }

  openSnackBar() {
    this.snackBService.openSnackBar('Its Working', 'Splash');
  }

}
