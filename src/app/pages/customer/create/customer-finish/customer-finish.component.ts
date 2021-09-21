import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// service
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { CreateCustomerService } from '../../services/create-customer-api.service';
// models


@Component({
  selector: 'app-customer-finish',
  templateUrl: './customer-finish.component.html',
  styleUrls: ['./customer-finish.component.scss']
})
export class CustomerFinishComponent {
  customerFinishFormGroup: FormGroup;
  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private createCustomerSvc: CreateCustomerService
  ) {
    this.customerFinishFormGroup = this.formBuilder.group({

    });
  }

}
