import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-data-import',
  templateUrl: './data-import.component.html',
  styleUrls: ['./data-import.component.scss']
})
export class DataImportComponent implements OnInit {
  selected: any;
  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  searchItems() {
    this.toastr.success('helloo i am success');
    this.toastr.error('helloo i am error');
  }

}
