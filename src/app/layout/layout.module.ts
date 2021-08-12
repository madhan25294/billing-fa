import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BodyComponent } from './body/body.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [BodyComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    BodyComponent
  ]
})
export class LayoutModule { }
