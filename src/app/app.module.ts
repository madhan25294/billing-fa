import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './stepper/stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
