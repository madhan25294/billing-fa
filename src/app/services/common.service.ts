import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CommonService {

  constructor(private http: HttpClient) {

  }

  getUsersData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }


}
