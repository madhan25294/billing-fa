import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProcessedDataComponent } from './processed-data/processed-data.component';



@NgModule({
  declarations: [ProcessedDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProcessedDataComponent }]),
  ]
})
export class ProcessedDataModule { }
