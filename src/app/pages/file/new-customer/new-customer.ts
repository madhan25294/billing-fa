import { Component, OnInit } from '@angular/core';
import { SnackBarService } from 'src/app/services/snack-bar.service';
// services
import { NewCustomerService } from './new-customer.service';
import { ConstantService } from '../../../services/constant.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.html',
  styleUrls: ['./new-customer.scss']
})
export class NewCustomerComponent implements OnInit {

  constructor(
    private snackBService: SnackBarService,
    private newCustomerService: NewCustomerService,
    private constantService: ConstantService) {

  }

  ngOnInit() {
  }

}
