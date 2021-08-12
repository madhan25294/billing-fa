import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFilesComponent } from './all-files/all-files.component';
import { LogsComponent } from './logs/logs.component';
import { DataImportComponent } from './data-import/data-import.component';

// const routes: Routes = [
//   { path: 'files', component: AllFilesComponent },
//   { path: 'logs', component: LogsComponent },
// ];

const routes: Routes = [
  {
    path: 'tools',
    children: [
      {
        path: 'files',
        component: AllFilesComponent,
        loadChildren: () =>
          import(
            './tools.module'
          ).then(m => m.ToolsModule)
      },
      {
        path: 'logs',
        component: LogsComponent,
        loadChildren: () =>
          import(
            './tools.module'
          ).then(m => m.ToolsModule)
      }
    ]
  },
  {
    path: 'data',
    children: [
      {
        path: 'dataimport',
        component: DataImportComponent,
        loadChildren: () =>
          import(
            './tools.module'
          ).then(m => m.ToolsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ToolsRoutingModule { }

