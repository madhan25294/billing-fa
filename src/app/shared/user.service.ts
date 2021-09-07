import { HttpClient, HttpHeaders } from "@angular/common/http";

import { API_URL } from "./../constants/api-url";
import { Injectable } from "@angular/core";
import { environment } from "./../../environments/environment";
import { LOCAL_STORAGE_KEY } from '../constants/local-storage';
import { Util } from '../utils/util';
import { AuthenticationToken } from '../pages/auth/auth-token';
import { Router } from '@angular/router';
import { ConstantService } from './constant.service';
import { SnackBarService } from './snack-bar.service';

@Injectable()
export class UserService {

  public tokenExpiration : any;
  constructor(private httpClient: HttpClient, private router: Router, private constantService: ConstantService, private snackBService: SnackBarService) {}

  public signIn(userName: string, password: string) {
    return this.httpClient.post<AuthenticationToken>(environment.backendUrl + API_URL.AUTH.LOGIN, { userName, password } );
  }

  public getUserDetails() {
    const currentToken = Util.getStorage(LOCAL_STORAGE_KEY.TOKEN);
    return this.httpClient.get(environment.backendUrl + API_URL.AUTH.USERNAME + '?token=' + currentToken );
  }
 public isLoggedInActive(): boolean {
   
    const currentToken = Util.getStorage(LOCAL_STORAGE_KEY.TOKEN);

     // before token expiry check ( 5 min early) to make regenerate token call
     this.tokenExpiration = Util.getStorage(LOCAL_STORAGE_KEY.TOKENEXPIRATION);
     const expiryTime = new Date(this.tokenExpiration).getTime();
     const currentTime =new Date(this.constantService.currentUTCFormattedDate()).getTime();
     const diff = ((currentTime/1000) - (expiryTime/ 1000));


     if (currentToken && expiryTime && diff <=-900) {
         return true;
     }
     else if (currentToken &&  expiryTime && diff >=-900)  {
       // call regenerate api
      this.httpClient.post<AuthenticationToken>(environment.backendUrl + API_URL.AUTH.REGENERATETOKEN + '?token=' +  currentToken,{})
        .subscribe((res) => {
          if (res) {
            Util.setStorage(LOCAL_STORAGE_KEY.TOKEN, res.token);
            Util.setStorage(LOCAL_STORAGE_KEY.TOKENEXPIRATION, res.tokenExpiration);
          }
        }, (error) => {
          this.snackBService.error('Regenerate token call request error');
          this.router.navigate(['./login']);
      });
      return true;
     }
     return false; 
    }

}
