import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.firstFormGroup = this.formBuilder.group({
      cmpName: ['', Validators.required],
      accNum: ['', Validators.required],
      branchCode: ['', Validators.required],
      contactAttention: ['', Validators.required],
      contactCon: ['', Validators.required],
      contactPhone: ['', Validators.required],
      contactExt: ['', Validators.required],
      contactFax: ['', Validators.required],
      contactEmail: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

}
