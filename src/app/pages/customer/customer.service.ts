import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../constants/api-url';
import { environment } from '../../../environments/environment';
// model
import {
  GetIndustries, CustomerType, GetSalesPerson, ProductCategory,
  Classification, ParentData, AccountManagers, CollectorData, AgreementData, PostaCodeData
} from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }


  public getIndustryList() {
    return this.httpClient.get<Array<GetIndustries>>(`${environment.backendUrl}${API_URL.CUSTOMER.GET_INDUSTRIES}`);
  }

  public getCustomerType() {
    return this.httpClient.get<Array<CustomerType>>(`${environment.backendUrl}${API_URL.CUSTOMER.GET_CUSTOMER_TYPE}`);
  }

  public getSalesPersons() {
    return this.httpClient.get<Array<GetSalesPerson>>(`${environment.backendUrl}${API_URL.CUSTOMER.GET_SALESPERSON}`);
  }

  public getProductCategory() {
    return this.httpClient.get<Array<ProductCategory>>(`${environment.backendUrl}${API_URL.CUSTOMER.GET_PRODUCT_CATEGORY}`);
  }

  public getClassifications() {
    return this.httpClient.get<Array<Classification>>(`${environment.backendUrl}${API_URL.CUSTOMER.GET_CLASSIFICATION}`);
  }

  public getParentCompany() {
    return this.httpClient.get<Array<ParentData>>(`${environment.backendUrl}${API_URL.CUSTOMER.GET_PARENT_DATA}`);
  }

  public getManagers() {
    return this.httpClient.get<Array<AccountManagers>>(`${environment.backendUrl}${API_URL.CUSTOMER.GET_ACC_MANAGERS}`);
  }

  public getColletorData() {
    return this.httpClient.get<Array<CollectorData>>(`${environment.backendUrl}${API_URL.CUSTOMER.GET_COLLECTOR_DATA}`);
  }

  public getAgreementData() {
    return this.httpClient.get<Array<AgreementData>>(`${environment.backendUrl}${API_URL.CUSTOMER.GET_AGREEMENT_DATA}`);
  }

  public getPostalCodeData(zipcode: string) {
    return this.httpClient.get<Array<PostaCodeData>>(`${environment.backendUrl}${API_URL.CUSTOMER.GET_POSTAL_CODE_DATA}/${zipcode}`);
  } 
  
  public saveCustomer(payload: any) {
    return this.httpClient.post<any>(`${environment.backendUrl}${API_URL.CUSTOMER.POST_CUSTOMER_SAVE}`, payload);
  }


}
