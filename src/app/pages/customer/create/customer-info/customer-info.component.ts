import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// service
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { CreateCustomerService } from '../../services/create-customer-api.service';
// models
import {
  GetIndustries
} from '../../models/create-customer.model';
@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent {
  // customer information
  customerInfoGroup: FormGroup;
  industryList: Array<GetIndustries>;
  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private createCustomerSvc: CreateCustomerService
  ) {
    // customer information
    this.customerInfoGroup = this.formBuilder.group({
      cmpName: ['', [Validators.required]],
      accNum: ['', [Validators.required]],
      branchCode: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      active: [false, [Validators.required]],
      contactAttention: ['', [Validators.required]],
      contactCon: ['', [Validators.required]],
      contactPhone: ['', [Validators.required]],
      contactExt: ['', [Validators.required]],
      contactFax: ['', [Validators.required]],
      contactEmail: ['', [Validators.required]]
    });
    this.industryList = [];
  }

}
