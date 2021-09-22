import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// service
import { SnackBarService } from '../../../shared/snack-bar.service';
import { CustomerService } from '../customer.service';
// models

// components
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { OracleSetupComponent } from './oracle-setup/oracle-setup.component';
import { ContractInfoComponent } from './contract-info/contract-info.component';
import { CustomerFinishComponent } from './customer-finish/customer-finish.component';
@Component({
  selector: 'app-create-customer',
  templateUrl: './customer-wizard.html',
  styleUrls: ['./customer-wizard.scss']
})
export class CreateCustomerComponent implements AfterViewInit {
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

  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private customerSvc: CustomerService,
    private cdr: ChangeDetectorRef) {
    this.customerInfoMetadata = {};
    this.oracleSetupMetadata = {};
    this.contractInfoMetadata = {};

    // for customer info step
    this.customerInfoMetadata.industryList = [];
    this.fetchIndustries();

    // for oraclesetup step
    this.oracleSetupMetadata.salesPersonsList = [];
    this.oracleSetupMetadata.customerTypes = [];
    this.oracleSetupMetadata.productCategoryList = [];
    this.oracleSetupMetadata.classificationsList = [];
    this.oracleSetupMetadata.parentCompaniesList = [];
    this.oracleSetupMetadata.managersList = [];
    this.oracleSetupMetadata.collectorsDataList = [];
    this.fetchSalesPersonsList();
    this.fetchCustomerTypes();
    this.fetchProductCategories();
    this.fetchClassifications();
    this.fetchParentCompany();
    this.fetchManagersList();
    this.fetchCollectorsData();

    // for contract info step
    this.contractInfoMetadata.agreementList = [];
    this.fetchAgreeementData();
  }

  ngAfterViewInit() {
    this.form1 = this.customerInfoComponent.customerInfoGroup;
    this.form2 = this.oracleSetupComponent.oracleSetupFormGroup;
    this.form3 = this.contractInfoComponent.contractInfoFormGroup;
    this.form4 = this.customerFinishComponent.customerFinishFormGroup;
    this.cdr.detectChanges();
  }

  fetchIndustries() {
    this.customerSvc.getIndustryList()
    .subscribe((industriesList) => {
      this.customerInfoMetadata.industryList = industriesList;
    }, (err: any) => {
      this.snackBService.error(err.error, '');
    })
  }

  fetchCustomerTypes() {
    this.customerSvc.getCustomerType()
      .subscribe((customerTypesList) => {
        this.oracleSetupMetadata.customerTypes = customerTypesList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchSalesPersonsList() {
    this.customerSvc.getSalesPersons()
      .subscribe((salesPersonsList) => {
        this.oracleSetupMetadata.salesPersonsList = salesPersonsList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchProductCategories() {
    this.customerSvc.getProductCategory()
      .subscribe((categoryList) => {
        this.oracleSetupMetadata.productCategoryList = categoryList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchClassifications() {
    this.customerSvc.getClassifications()
      .subscribe((classificationsList) => {
        this.oracleSetupMetadata.classificationsList = classificationsList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchParentCompany() {
    this.customerSvc.getParentCompany()
      .subscribe((parentCompaniesList) => {
        this.oracleSetupMetadata.parentCompaniesList = parentCompaniesList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchManagersList() {
    this.customerSvc.getManagers()
      .subscribe((managersList) => {
        this.oracleSetupMetadata.managersList = managersList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchCollectorsData() {
    this.customerSvc.getColletorData()
      .subscribe((collectorsList) => {
        this.oracleSetupMetadata.collectorsDataList = collectorsList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }

  fetchAgreeementData() {
    this.customerSvc.getAgreementData()
      .subscribe((agreementsList) => {
        this.contractInfoMetadata.agreementList = agreementsList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }

}
