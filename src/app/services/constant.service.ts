import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_KEY } from '../constants/local-storage';
import { Util } from '../utils/util';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() {
  }


  public EMAIL_PATTERN =
    '(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';

  getFormattedDate(date: any) {
    let year = (date && typeof date === 'object') ? date.getFullYear() : '';
    let month = (1 + date.getMonth()).toString().padStart(2, '0') || '';
    let day = date.getDate().toString().padStart(2, '0') || '';
    return month + '/' + day + '/' + year;
  }

}
