import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.scss']
})
export class GenericDialogComponent {
  constructor(public dialogRef: MatDialogRef<GenericDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { [key: string]: any }) {}

  confirmModelYes() {
    //this.customerPubsubService.pubToShowConfirmpopup(this.data.modelData.data);
    this.dialogRef.close(this.data.modelData.data);
  }
}
