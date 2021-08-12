import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AllFilesComponent } from './all-files/all-files.component';
import { ToolsRoutingModule } from './tools.routing.module';
import { LogsComponent } from './logs/logs.component';
import { MaterialModule } from '../../layout/material.module';

@NgModule({
  declarations: [AllFilesComponent, LogsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ToolsRoutingModule
  ],
  exports: [
    
  ]
})
export class ToolsModule { }
