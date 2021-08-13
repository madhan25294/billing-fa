import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AllFilesComponent } from './all-files/all-files.component';
import { ToolsRoutingModule } from './tools.routing.module';
import { LogsComponent } from './logs/logs.component';
import { DataImportComponent } from './data-import/data-import.component';
import { MaterialModule } from '../../layout/material.module';
// material modules
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AllFilesComponent, LogsComponent, DataImportComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ToolsRoutingModule,
    FormsModule,
    // material modules
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  exports: [

  ]
})
export class ToolsModule { }
