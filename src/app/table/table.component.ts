import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  gridData: any;
  hightLightedRow: number;
  constructor() { 
    this.hightLightedRow = 3;
    // this.gridData = Array.from(Array(100).keys());
    this.gridData = [];
    this.initGridData();
  }

  initGridData() {
   for (let i = 0; i < 100; i++) {
    this.gridData.push({
      Line: i,
      GL: i,
      Text: i,
      Cost: i,
      Qty: i,
      Rate: i,
      Ext: i,
      GroupHead: i,
      GroupID: i,
      CreditMemo: i
    })
   }
  }

  updateRowHighlight(ev: any) {
    if (ev.keyCode === 40 || ev.which === 40 ) {
      if (this.gridData.length !== this.hightLightedRow) {
        this.hightLightedRow++
      }
    }
    if (ev.keyCode === 38 || ev.which === 38 ) {
      if (this.hightLightedRow !== 0 ) {
        this.hightLightedRow--
      }
    }
  }
  ngOnInit() {
    $(function() {
      $('#excel-table').resizableColumns()
    })
  }

}
