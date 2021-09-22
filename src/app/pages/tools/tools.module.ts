import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../layout/material-component.module';
import { AllFilesComponent } from './all-files/all-files.component';
import { ToolsRoutingModule } from './tools.routing.module';
import { DataImportComponent } from './data-import/data-import.component';
import { ViewLogsDialogContentComponent } from './data-import/data-import.component';
import { FormsModule } from '@angular/forms';
import { ToolsComponent } from './tools.component';

@NgModule({
  declarations: [ToolsComponent,AllFilesComponent, DataImportComponent,ViewLogsDialogContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ToolsRoutingModule,
    FormsModule
  ],
  exports: [],
  entryComponents: [ToolsComponent],
})
export class ToolsModule {}
