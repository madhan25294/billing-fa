import { Component, OnInit } from '@angular/core';
import * as Handsontable from 'handsontable';

@Component({
  selector: 'app-table-like-spreadsheet',
  templateUrl: './table-like-spreadsheet.component.html',
  styleUrls: ['./table-like-spreadsheet.component.scss']
})
export class TableLikeSpreadsheetComponent implements OnInit {
  dataset: any;
  hotSettings: any;
  constructor() {

    this.dataset = [
      // { id: 1, name: 'Ted Right', address: 'Wall Street' },
      // { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
      // { id: 3, name: 'Joan Well', address: 'Broadway' },
      // { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
      // { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
      // { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
      // { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
      // { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
    ]
    this.initDataset();
    this.hotSettings = {
      data: this.dataset,
      colHeaders: true,
      rowHeaders: true,
      manualColumnResize: true,
      manualRowResize: true,
      // autoColumnSize: {syncLimit: '100%'},
      width: '900',
      height: '500',
      licenseKey: 'non-commercial-and-evaluation'
    };
  }

  initDataset() {
    for (let i = 0; i < 100; i++) {
      this.dataset.push(
        {
          line: i, 
          glAccNbr: `Gl Acc Nbr ${i}`,
          text: `Text ${i}`,
          costCenter: `Cost center ${i}`,
          qty: `Quantity ${i}`,
          rate: `Rate ${i}`,
          groupHeader: `Group Hdr ${i}`,
          groupId: `Group id ${i}`,
          creditMemo: `Credit memo ${i}`,
        }
      )
    }
  }

  ngOnInit(): void {
  }

}
