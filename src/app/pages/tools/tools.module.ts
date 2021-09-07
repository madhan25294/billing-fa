import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../layout/material-component.module';
import { AllFilesComponent } from './all-files/all-files.component';
import { ToolsRoutingModule } from './tools.routing.module';
import { DataImportComponent } from './data-import/data-import.component';
import { ViewLogsDialogContentComponent } from './data-import/data-import.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AllFilesComponent, DataImportComponent,ViewLogsDialogContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ToolsRoutingModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    ToolsRoutingModule,
  ],
  exports: [],
  entryComponents: [AllFilesComponent],
})
export class ToolsModule {}
