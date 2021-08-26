import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../../constants/api-url';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewCustomerService {

  constructor(private httpClient: HttpClient) { }



}
