import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// service
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { CustomerService } from '../../customer.service';
// models


@Component({
  selector: 'app-customer-finish',
  templateUrl: './customer-finish.component.html',
  styleUrls: ['./customer-finish.component.scss']
})
export class CustomerFinishComponent {
  @Input() metaData: any;
  customerFinishFormGroup: FormGroup;
  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {
    this.customerFinishFormGroup = this.formBuilder.group({
      
    });
  }

}
