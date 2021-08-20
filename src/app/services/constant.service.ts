import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_KEY } from '../constants/local-storage';
import { Util } from '../utils/util';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() {
  }

  getFormattedDate(date: any) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return month + '/' + day + '/' + year;
  }

}
