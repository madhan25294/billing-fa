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
        this.newContract()
      ]),
      address: ['', [Validators.required]]
    });
  }

  newContract(): FormGroup {
    return this.formBuilder.group({
      agreement: ['', []],
      startDate: ['', []],
      endDate: ['', []],
      term: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(3)]],
      renewalterm: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(3)]],
      notification: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(3)]],
      contractNumber: ['', [Validators.maxLength(75)]],
      unlimitedAutoRenew: [false, []],
      contractLink: ['', []],
      // sow
      sows: this.formBuilder.array([
        this.newSow()
      ])
    });
  }

  newSow(): FormGroup {
    return this.formBuilder.group({
      cpi: [false, []],
      cpiCap: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      sowNo: ['', [Validators.maxLength(3)]],
      sowDate: ['', []],
      amendmentDates: this.formBuilder.array([
        this.formBuilder.group({
          amendmentDate: ['', []],
          amendmentNo: ['', [Validators.maxLength(25)]]
        })
      ])
    })
  }


  addContract() {
    let contacts = this.contractInfoFormGroup.get('contract') as FormArray;
    contacts.push(this.newContract());
  }

  deleteContract(ind: number) {
    let contracts = this.contractInfoFormGroup.get('contract') as FormArray;
    contracts.removeAt(ind);
  }

  addSow(selectedContract: any) {
    let sows = selectedContract.get('sows') as FormArray;
    sows.push(this.newSow());
  }

  deleteSow(selectedContract: any, ind: number) {
    let sows = selectedContract.get('sows') as FormArray;
    sows.removeAt(ind);
  }

  addAmmendment(selectedSow: any) {
    let ammendment = selectedSow.get('amendmentDates') as FormArray;
    ammendment.push(this.formBuilder.group({
      amendmentDate: ['', [Validators.required]],
      amendmentNo: ['', [Validators.required]],
    }));
  }
}
