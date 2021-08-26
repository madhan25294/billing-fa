import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AllFilesComponent } from './all-files/all-files.component';
import { ToolsRoutingModule } from './tools.routing.module';
import { DataImportComponent } from './data-import/data-import.component';

// material modules
import { MaterialModule } from '../../layout/material-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AllFilesComponent, DataImportComponent],
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
