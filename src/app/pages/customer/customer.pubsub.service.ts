import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class CustomerPubsubService {

  confirmPopup: Subject<any> = new Subject<any>();

  constructor() {

  }

  pubToShowConfirmpopup(obj: any) {
    this.confirmPopup.next(obj);
  }
  subToShowConfirmpopup() {
    return this.confirmPopup.asObservable();
  }

}
