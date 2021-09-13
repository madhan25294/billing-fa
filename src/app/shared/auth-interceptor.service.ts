import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";

import { Injectable } from "@angular/core";
import { LOCAL_STORAGE_KEY } from "../constants/local-storage";
import { Router } from "@angular/router";
import { Util } from 'src/app/utils/util';
import { tap } from "rxjs/operators";
import { SnackBarService } from './snack-bar.service';
import { Observable } from 'rxjs';
import { PAGE } from '../constants/page';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private snackBService: SnackBarService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = Util.getStorage(LOCAL_STORAGE_KEY.TOKEN);

    const headers: any = {};

    headers['Accept'] = 'application/json';

    if (token) {
      headers['Authorization'] = 'bearer ' + token;
    }


    const authRequest = req.clone({ setHeaders: { ...headers } });

    return next
      .handle(authRequest)
      .pipe(
        tap(
          (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                Util.clearStorage();
                this.snackBService.error("Session is expired");
                this.router.navigate([PAGE.LOGIN]);
              } else {
                return;
              }
            }
          }
        )
      );
  }
}
