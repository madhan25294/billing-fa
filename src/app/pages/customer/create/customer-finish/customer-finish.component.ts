import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// service
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { CreateCustomerService } from '../../services/create-customer-api.service';
// models
import {
  GetIndustries, CustomerType, GetSalesPerson, ProductCategory,
  Classification, ParentData, AccountManagers, CollectorData
} from '../../models/create-customer.model';

@Component({
  selector: 'app-customer-finish',
  templateUrl: './customer-finish.component.html',
  styleUrls: ['./customer-finish.component.scss']
})
export class CustomerFinishComponent implements OnInit {
  customerFinishFormGroup: FormGroup;
  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private createCustomerSvc: CreateCustomerService
  ) {
    this.customerFinishFormGroup = this.formBuilder.group({

    });
  }

  ngOnInit(): void {
  }

}
