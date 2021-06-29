import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CommonService {

  constructor(private http: HttpClient) {

  }

  getAllData() {
    const url = 'http://localhost:4200/assets/cartitems.json';
    return this.http.get(url);
  }


}
