import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from "./shared/auth-interceptor.service";
import { LayoutModule } from "./layout/layout.module";
import { AppRoutingModule } from './app.routing.module';
import { ToolsModule } from './pages/tools/tools.module';
import { CustomerModule } from './pages/customer/customer.module';
import { AuthModule } from './pages/auth/auth.module';
import { AuthGuard } from './shared/auth-guard.service';
import { EventService } from './shared/event.service';
import { RouterModule } from '@angular/router';
import { UserService } from './shared/user.service';
import { DialogService } from './shared/dialog.service';

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
    MatNativeDateModule,
    AuthModule,
    ToolsModule,
    CustomerModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    AuthGuard,
    EventService,
    UserService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
