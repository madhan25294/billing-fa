import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  checked = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
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

}


