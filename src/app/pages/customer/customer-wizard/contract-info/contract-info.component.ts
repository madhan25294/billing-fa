import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
// service
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { CustomerService } from '../../customer.service';
// models

@Component({
  selector: 'app-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.scss']
})
export class ContractInfoComponent {
  @Input() metaData: any;
  contractInfoFormGroup: FormGroup;

  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {
    this.contractInfoFormGroup = this.formBuilder.group({
      contract: this.formBuilder.array([
        this.formBuilder.group({
          agreement: ['', [Validators.required]],
          startDate: ['', [Validators.required]],
          endDate: ['', [Validators.required]],
          term: ['', [Validators.required]],
          renewalterm: ['', [Validators.required]],
          notification: ['', [Validators.required]],
          contractNumber: ['', [Validators.required]],
          unlimitedAutoRenew: [false, [Validators.required]],
          contractLink: ['', [Validators.required]],
          // sow
          sows: this.formBuilder.array([
            this.formBuilder.group({
              cpi: [false, [Validators.required]],
              cpiCap: ['', [Validators.required]],
              sowNo: ['', [Validators.required]],
              sowDate: ['', [Validators.required]],
              amendmentNo: ['', [Validators.required]],
              amendmentDates: this.formBuilder.array([
                this.formBuilder.group({
                  amendmentDate: ['', [Validators.required]]
                })
              ])
            })
          ])
        })
      ]),
      address: ['', [Validators.required]]
    });
  }

  addContract() {
    let contacts = this.contractInfoFormGroup.get('contract') as FormArray;
    contacts.push(this.formBuilder.group({
      agreement: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      term: ['', [Validators.required]],
      renewalterm: ['', [Validators.required]],
      notification: ['', [Validators.required]],
      contractNumber: ['', [Validators.required]],
      unlimitedAutoRenew: [false, [Validators.required]],
      contractLink: ['', [Validators.required]],
    }));
  }

  deleteContract(ind: number) {
    let contracts = this.contractInfoFormGroup.get('contract') as FormArray;
    contracts.removeAt(ind);
  }

  addSow(selectedContract: any) {
    let sows = selectedContract.get('sows') as FormArray;
    sows.push(this.formBuilder.group({
      cpi: [false, [Validators.required]],
      cpiCap: ['', [Validators.required]],
      sowNo: ['', [Validators.required]],
      sowDate: ['', [Validators.required]],
      amendmentNo: ['', [Validators.required]],
      amendmentDates: this.formBuilder.array([
        this.formBuilder.group({
          amendmentDate: ['', [Validators.required]]
        })
      ])
    }));
  }

  deleteSow(selectedContract: any, ind: number) {
    let sows = selectedContract.get('sows') as FormArray;
    sows.removeAt(ind);
  }
}
