import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CommonService {

  constructor(private http: HttpClient) {

  }

  getUsersData() {
    const url = 'https://localhost:44346/api/CustomerInfo';
    return this.http.get(url);
  }

}
