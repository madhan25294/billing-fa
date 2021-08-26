import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthInterceptor } from "./services/auth-interceptor.service";
import { LayoutModule } from "./layout/layout.module";
import { AppRoutingModule } from './app.routing.module';
import { ToolsModule } from './pages/tools/tools.module';
import { AuthModule } from './pages/auth/auth.module';
import { AuthGuard } from './services/auth-guard.service';
import { EventService } from './services/event.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HammerModule,
    RouterModule,
    LayoutModule,   
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    AuthModule,
    ToolsModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    AuthGuard,
    EventService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
