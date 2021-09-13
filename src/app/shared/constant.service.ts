import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_KEY } from '../constants/local-storage';
import { Util } from '../utils/util';

@Injectable({
  providedIn: 'root',
})
export class ConstantService {
  constructor() {}
  public NO_RECORDS = 'No records to show';

  public EMAIL_PATTERN =
    '(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';

  public getFormattedDate(date: any) {
    let year = date.getFullYear() || '';
    let month = (1 + date.getMonth()).toString().padStart(2, '0') || '';
    let day = date.getDate().toString().padStart(2, '0') || '';
    return month + '/' + day + '/' + year;
  }

  public currentUTCFormattedDate() {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const hours = date.getUTCHours();

    const min = date.getUTCMinutes();
    const sec = date.getUTCSeconds();

    const min1 = (min < 10 ? '0' : '') + min;
    const sec1 = (sec < 10 ? '0' : '') + sec;

    /* If needs to check across ampm use this block. Ex 09/06/2021 11:22:42 am , else it will come as 09/06/2021 13:22:42
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = ((hours + 11) % 12 + 1);
    return month + "/" + day + "/" + year + " " + hours + ":" + min + ":" + sec + " " + ampm; */

    return month + '/' + day + '/' + year + ' ' + hours + ':' + min + ':' + sec;
  }
}
