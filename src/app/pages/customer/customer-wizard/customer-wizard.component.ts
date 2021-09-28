import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// service
import { SnackBarService } from '../../../shared/snack-bar.service';
import { CustomerService } from '../customer.service';
import { CustomerPubsubService } from '../customer.pubsub.service';
// models

// components
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { OracleSetupComponent } from './oracle-setup/oracle-setup.component';
import { ContractInfoComponent } from './contract-info/contract-info.component';
import { CustomerFinishComponent } from './customer-finish/customer-finish.component';
@Component({
  selector: 'app-create-customer',
  templateUrl: './customer-wizard.component.html',
  styleUrls: ['./customer-wizard.component.scss']
})
export class CreateCustomerComponent implements AfterViewInit, OnInit {
  form1: FormGroup;
  @ViewChild('stepOne') customerInfoComponent: CustomerInfoComponent;
  form2: FormGroup;
  @ViewChild('stepTwo') oracleSetupComponent: OracleSetupComponent;
  form3: FormGroup;
  @ViewChild('stepThree') contractInfoComponent: ContractInfoComponent;
  form4: FormGroup;
  @ViewChild('stepFour') customerFinishComponent: CustomerFinishComponent;

  customerInfoMetadata: { [key: string]: any };
  oracleSetupMetadata: { [key: string]: any };
  contractInfoMetadata: { [key: string]: any };

  confirmPopup: { [key: string]: any };
  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private cdr: ChangeDetectorRef,
    private customerPubsubService: CustomerPubsubService,
    public dialog: MatDialog) {
    this.confirmPopup = {
      show: false,
      boldContent: '',
      content: ''
    };

    this.customerInfoMetadata = {};
    this.oracleSetupMetadata = {};
    this.contractInfoMetadata = {};

    // for customer info step
    this.customerInfoMetadata.industryList = [];

    // for oraclesetup step
    this.oracleSetupMetadata.salesPersonsList = [];
    this.oracleSetupMetadata.customerTypes = [];
    this.oracleSetupMetadata.productCategoryList = [];
    this.oracleSetupMetadata.classificationsList = [];
    this.oracleSetupMetadata.parentCompaniesList = [];
    this.oracleSetupMetadata.managersList = [];
    this.oracleSetupMetadata.collectorsDataList = [];


    // for contract info step
    this.contractInfoMetadata.agreementList = [];
    this.bindForToggleConfirmpopup()
  }

  bindForToggleConfirmpopup() {
    this.customerPubsubService.subToShowConfirmpopup()
      .subscribe((res: any) => {
        if (res.showPopup) {
          const popupData: any = {};
          popupData.boldContent = res.boldContent;
          popupData.content = res.content;
          popupData.data = res.data;
          this.openDialog(popupData);
        }
      })
  }

  openDialog(data: { [key: string]: any }) {
    const dialogRef = this.dialog.open(CustomerDialogContentComponent, {
      data: {
        modelData: data,
      }
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  confirmoModelNo() {
    this.confirmPopup.show = false;
  }

  confirmoModelYes() {
    this.confirmPopup.show = false;
    this.customerPubsubService.pubToShowConfirmpopup(this.confirmPopup.data);
  }

  ngOnInit() {
    // // for customer info step
    // this.fetchIndustries();

    // // for oraclesetup step
    // this.fetchSalesPersonsList();
    // this.fetchCustomerTypes();
    // this.fetchProductCategories();
    // this.fetchClassifications();
    // this.fetchParentCompany();
    // this.fetchManagersList();
    // this.fetchCollectorsData();

    // // for contract info step
    // this.fetchAgreeementData();
  }

  ngAfterViewInit() {
    this.form1 = this.customerInfoComponent.customerInfoGroup;
    this.form2 = this.oracleSetupComponent.oracleSetupFormGroup;
    this.form3 = this.contractInfoComponent.contractInfoFormGroup;
    this.form4 = this.customerFinishComponent.customerFinishFormGroup;
    this.cdr.detectChanges();
  }

  fetchIndustries() {
    this.customerService.getIndustryList()
      .subscribe((industriesList) => {
        this.customerInfoMetadata.industryList = industriesList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }

  fetchCustomerTypes() {
    this.customerService.getCustomerType()
      .subscribe((customerTypesList) => {
        this.oracleSetupMetadata.customerTypes = customerTypesList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchSalesPersonsList() {
    this.customerService.getSalesPersons()
      .subscribe((salesPersonsList) => {
        this.oracleSetupMetadata.salesPersonsList = salesPersonsList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchProductCategories() {
    this.customerService.getProductCategory()
      .subscribe((categoryList) => {
        this.oracleSetupMetadata.productCategoryList = categoryList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchClassifications() {
    this.customerService.getClassifications()
      .subscribe((classificationsList) => {
        this.oracleSetupMetadata.classificationsList = classificationsList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchParentCompany() {
    this.customerService.getParentCompany()
      .subscribe((parentCompaniesList) => {
        this.oracleSetupMetadata.parentCompaniesList = parentCompaniesList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchManagersList() {
    this.customerService.getManagers()
      .subscribe((managersList) => {
        this.oracleSetupMetadata.managersList = managersList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchCollectorsData() {
    this.customerService.getColletorData()
      .subscribe((collectorsList) => {
        this.oracleSetupMetadata.collectorsDataList = collectorsList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }

  fetchAgreeementData() {
    this.customerService.getAgreementData()
      .subscribe((agreementsList) => {
        this.contractInfoMetadata.agreementList = agreementsList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }

}

@Component({
  selector: 'app-customer-dialog-content',
  templateUrl: 'customer-wizard-model.html',
  styleUrls: ['./customer-wizard.component.scss'],
})
export class CustomerDialogContentComponent {
  
  constructor(
    public dialogRef: MatDialogRef<CustomerDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { [key: string]: any },
    private customerPubsubService: CustomerPubsubService) {
  }

  confirmoModelYes() {
    this.customerPubsubService.pubToShowConfirmpopup(this.data.modelData.data);
    this.dialogRef.close();
  }
  
}

