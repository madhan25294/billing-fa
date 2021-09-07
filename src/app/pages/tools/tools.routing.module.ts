import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../shared/auth-guard.service';
import { AllFilesComponent } from './all-files/all-files.component';
import { DataImportComponent } from './data-import/data-import.component'

const routes: Routes = [
  {
    path: 'tools', component: AllFilesComponent,
    children: [{ path: 'files', component: AllFilesComponent, canActivate: [AuthGuard] }]
  },
  {
    path: 'data', component: DataImportComponent,
    children: [{ path: 'dataimport', component: DataImportComponent, canActivate: [AuthGuard] }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ToolsRoutingModule { }



