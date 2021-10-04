import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { GenericDialogComponent } from '../pages/customer/generic-dialog/generic-dialog.component';

@Injectable()
export class DialogService {
  constructor(private dialog:MatDialog){

  }
  confirmDialog(popUpData:{ [key: string]: any }):Observable<any>{
   return this.dialog.open(GenericDialogComponent,{
         data: {
        modelData: popUpData,
      }
    }).afterClosed();
  }
}
