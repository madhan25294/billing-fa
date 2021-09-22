import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingDataComponent } from './pending-data/pending-data.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/layout/material-component.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PendingDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PendingDataComponent }]),
    MaterialModule,
    FormsModule,
    
  ]
})
export class PendingDataModule { }
