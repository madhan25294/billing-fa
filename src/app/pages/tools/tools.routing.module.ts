import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../shared/auth-guard.service';
import { AllFilesComponent } from './all-files/all-files.component';
import { DataImportComponent } from './data-import/data-import.component'
import { ToolsComponent } from './tools.component';

const routes: Routes = [
  {
    path: 'tools',
    children: [
      { path: 'files', component: AllFilesComponent, canActivate: [AuthGuard] },
      { path: 'dataimport', component: DataImportComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: 'pending',
    component: ToolsComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pending-data/pending-data.module').then(
        (m) => m.PendingDataModule
      ),
  },
  {
    path: 'processed',
    component: ToolsComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./processed-data/processed-data.module').then(
        (m) => m.ProcessedDataModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ToolsRoutingModule { }



