import { Component, OnInit } from '@angular/core';
import * as GC from "@grapecity/spread-sheets";

@Component({
  selector: 'app-grape-city',
  templateUrl: './grape-city.component.html',
  styleUrls: ['./grape-city.component.scss']
})
export class GrapeCityComponent implements OnInit {
  dataset: any;
  spreadBackColor = "aliceblue";
  sheetName = "Goods List";
  hostStyle = {
    width: "900px",
    height: "500px",
  };
  // data = [
  //   {
  //     Name: "Apple",
  //     Category: "Fruit",
  //     Price: 1,
  //     "Shopping Place": "Wal-Mart",
  //   },
  //   {
  //     Name: "Potato",
  //     Category: "Fruit",
  //     Price: 2.01,
  //     "Shopping Place": "Other",
  //   },
  //   {
  //     Name: "Tomato",
  //     Category: "Vegetable",
  //     Price: 3.21,
  //     "Shopping Place": "Other",
  //   },
  //   {
  //     Name: "Sandwich",
  //     Category: "Food",
  //     Price: 2,
  //     "Shopping Place": "Wal-Mart",
  //   },
  //   {
  //     Name: "Hamburger",
  //     Category: "Food",
  //     Price: 2,
  //     "Shopping Place": "Wal-Mart",
  //   },
  //   {
  //     Name: "Grape",
  //     Category: "Fruit",
  //     Price: 4,
  //     "Shopping Place": "Sun Store",
  //   },
  // ];
  columnWidth = 100;

  constructor() {
    this.dataset = [];
    this.initDataset()
  }

  ngOnInit(): void {
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


  workbookInit(args: any) {
    let spread: GC.Spread.Sheets.Workbook = args.spread;
    let sheet = spread.getActiveSheet();
    // sheet.getCell(0, 0).text("My SpreadJS Angular Project").foreColor("blue");
  }

}
