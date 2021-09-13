import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-component.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [BodyComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    BodyComponent
  ]
})
export class LayoutModule { }
