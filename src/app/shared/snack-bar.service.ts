import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar:MatSnackBar) { }

  /* It takes three parameters 
    1.the message string 
    2.the action 
    3.the duration, alignment, etc. */
  
    success(message: string, action: string='close') {
      this.snackBar.open(message, action, {
         duration: 2000,
         verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
         horizontalPosition: 'right', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
         panelClass: ['snackbar-success']
      });
    }

    error(message: string, action: string='close') {
      this.snackBar.open(message, action, {
         duration: 2000,
         verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
         horizontalPosition: 'right', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
         panelClass: ['snackbar-error']
      });
    }
}
