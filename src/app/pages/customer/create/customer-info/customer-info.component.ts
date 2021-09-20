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
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {
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
  this.fetchIndustries();
}

ngOnInit(): void {
}

// customer information
fetchIndustries() {
  this.industryList = [
    {
      "id": 0,
      "industry": "  - select an industry -"
    },
    {
      "id": 100,
      "industry": "Abstractor - Abstractors/Title Searchers"
    },
    {
      "id": 160,
      "industry": "Document Services - Document Image Online Reseller"
    },
    {
      "id": 107,
      "industry": "Document Services - Document Retrieval"
    },
    {
      "id": 175,
      "industry": "Financial Services - Bank/Lender"
    },
    {
      "id": 175,
      "industry": "Financial Services - Bank/Lender"
    },
    {
      "id": 179,
      "industry": "Financial Services - Capital Markets"
    },
    {
      "id": 179,
      "industry": "Financial Services - Capital Markets"
    },
    {
      "id": 176,
      "industry": "Financial Services - Credit Union/CUSO"
    },
    {
      "id": 176,
      "industry": "Financial Services - Credit Union/CUSO"
    },
    {
      "id": 181,
      "industry": "Financial Services - FSV Other"
    },
    {
      "id": 181,
      "industry": "Financial Services - FSV Other"
    },
    {
      "id": 180,
      "industry": "Financial Services - Insurance"
    },
    {
      "id": 180,
      "industry": "Financial Services - Insurance"
    },
    {
      "id": 177,
      "industry": "Financial Services - Mortgage Broker"
    },
    {
      "id": 177,
      "industry": "Financial Services - Mortgage Broker"
    },
    {
      "id": 178,
      "industry": "Financial Services - Servicing"
    },
    {
      "id": 178,
      "industry": "Financial Services - Servicing"
    },
    {
      "id": 182,
      "industry": "Government - City/Local"
    },
    {
      "id": 182,
      "industry": "Government - City/Local"
    },
    {
      "id": 183,
      "industry": "Government - County/Regional"
    },
    {
      "id": 183,
      "industry": "Government - County/Regional"
    },
    {
      "id": 185,
      "industry": "Government - Federal"
    },
    {
      "id": 185,
      "industry": "Government - Federal"
    },
    {
      "id": 186,
      "industry": "Government - Reseller/Integrator"
    },
    {
      "id": 186,
      "industry": "Government - Reseller/Integrator"
    },
    {
      "id": 184,
      "industry": "Government - State"
    },
    {
      "id": 184,
      "industry": "Government - State"
    },
    {
      "id": 187,
      "industry": "Land Services - Engineering/Survey"
    },
    {
      "id": 187,
      "industry": "Land Services - Engineering/Survey"
    },
    {
      "id": 191,
      "industry": "Land Services - Land Services Other"
    },
    {
      "id": 191,
      "industry": "Land Services - Land Services Other"
    },
    {
      "id": 189,
      "industry": "Land Services - Oil & Gas"
    },
    {
      "id": 189,
      "industry": "Land Services - Oil & Gas"
    },
    {
      "id": 190,
      "industry": "Land Services - PACE Lending"
    },
    {
      "id": 190,
      "industry": "Land Services - PACE Lending"
    },
    {
      "id": 188,
      "industry": "Land Services - Utility/Solar/Telecom"
    },
    {
      "id": 188,
      "industry": "Land Services - Utility/Solar/Telecom"
    },
    {
      "id": 140,
      "industry": "Land Surveyor/Engineering - Civil Engineer"
    },
    {
      "id": 118,
      "industry": "Land Surveyor/Engineering - Land Surveyor"
    },
    {
      "id": 101,
      "industry": "Legal - Attorney / Paralegal"
    },
    {
      "id": 104,
      "industry": "Legal - Collection Agency"
    },
    {
      "id": 194,
      "industry": "Legal Services - Legal Services Other"
    },
    {
      "id": 194,
      "industry": "Legal Services - Legal Services Other"
    },
    {
      "id": 192,
      "industry": "Legal Services - Probate/Estate Planning"
    },
    {
      "id": 192,
      "industry": "Legal Services - Probate/Estate Planning"
    },
    {
      "id": 193,
      "industry": "Legal Services - Real Estate Litigation"
    },
    {
      "id": 193,
      "industry": "Legal Services - Real Estate Litigation"
    },
    {
      "id": 123,
      "industry": "Miscellaneous - Architect"
    },
    {
      "id": 108,
      "industry": "Miscellaneous - Financial Planning"
    },
    {
      "id": 162,
      "industry": "Miscellaneous - Franchise"
    },
    {
      "id": 158,
      "industry": "Miscellaneous - Interior Design"
    },
    {
      "id": 159,
      "industry": "Miscellaneous - Other"
    },
    {
      "id": 113,
      "industry": "Miscellaneous - Private Investigators"
    },
    {
      "id": 147,
      "industry": "Mortgage Lending - Mortgage Lender"
    },
    {
      "id": 124,
      "industry": "Mortgage Lending - Mortgage Services"
    },
    {
      "id": 134,
      "industry": "Real Estate - Contractor/Developer"
    },
    {
      "id": 114,
      "industry": "Real Estate - Property Management"
    },
    {
      "id": 115,
      "industry": "Real Estate - Real Estate Investor"
    },
    {
      "id": 136,
      "industry": "Real Estate - Real Estate Services"
    },
    {
      "id": 196,
      "industry": "Real Estate Services - Appraisal/AMC"
    },
    {
      "id": 196,
      "industry": "Real Estate Services - Appraisal/AMC"
    },
    {
      "id": 195,
      "industry": "Real Estate Services - Commercial"
    },
    {
      "id": 195,
      "industry": "Real Estate Services - Commercial"
    },
    {
      "id": 198,
      "industry": "Real Estate Services - Direct Marketing"
    },
    {
      "id": 198,
      "industry": "Real Estate Services - Direct Marketing"
    },
    {
      "id": 197,
      "industry": "Real Estate Services - Doc Retrieval"
    },
    {
      "id": 197,
      "industry": "Real Estate Services - Doc Retrieval"
    },
    {
      "id": 199,
      "industry": "Real Estate Services - RE Investment"
    },
    {
      "id": 199,
      "industry": "Real Estate Services - RE Investment"
    },
    {
      "id": 201,
      "industry": "Real Estate Services - RE Services Other"
    },
    {
      "id": 201,
      "industry": "Real Estate Services - RE Services Other"
    },
    {
      "id": 200,
      "industry": "Real Estate Services - Technology"
    },
    {
      "id": 200,
      "industry": "Real Estate Services - Technology"
    },
    {
      "id": 126,
      "industry": "Right-of-Way Services - Government Agency"
    },
    {
      "id": 111,
      "industry": "Right-of-Way Services - Oil/Gas/Utility"
    },
    {
      "id": 116,
      "industry": "Right-of-Way Services - Right-of-Way"
    },
    {
      "id": 170,
      "industry": "SIS - Abstractors/Title Searchers"
    },
    {
      "id": 165,
      "industry": "SIS - Attorney / Paralegal"
    },
    {
      "id": 167,
      "industry": "SIS - Foreclosure"
    },
    {
      "id": 173,
      "industry": "SIS - Government Agency"
    },
    {
      "id": 172,
      "industry": "SIS - Insurance"
    },
    {
      "id": 166,
      "industry": "SIS - Land Surveyor"
    },
    {
      "id": 168,
      "industry": "SIS - Lenders"
    },
    {
      "id": 174,
      "industry": "SIS - Mortgage Services"
    },
    {
      "id": 169,
      "industry": "SIS - Other"
    },
    {
      "id": 171,
      "industry": "SIS - Realtor"
    },
    {
      "id": 163,
      "industry": "SIS - Title Insurance Company / Agent"
    },
    {
      "id": 164,
      "industry": "SIS - Vendor Management"
    },
    {
      "id": 204,
      "industry": "Title & Settlement Services - First American"
    },
    {
      "id": 204,
      "industry": "Title & Settlement Services - First American"
    },
    {
      "id": 203,
      "industry": "Title & Settlement Services - Title Agent"
    },
    {
      "id": 203,
      "industry": "Title & Settlement Services - Title Agent"
    },
    {
      "id": 202,
      "industry": "Title & Settlement Services - Title Company"
    },
    {
      "id": 202,
      "industry": "Title & Settlement Services - Title Company"
    },
    {
      "id": 205,
      "industry": "Title & Settlement Services - TSS Other"
    },
    {
      "id": 205,
      "industry": "Title & Settlement Services - TSS Other"
    },
    {
      "id": 132,
      "industry": "Title Company - Title Insurance Company / Agent"
    },
    {
      "id": 138,
      "industry": "Title Company - Title Insurance Underwriter"
    }
  ]
  // this.createCustomerSvc.getIndustryList()
  // .subscribe((industriesList) => {
  //   this.industryList = industriesList;
  // }, (err: any) => {
  //   this.snackBService.error(err.error, '');
  // })
}

}
