import { HttpClient, HttpHeaders } from "@angular/common/http";

import { API_URL } from "./../constants/api-url";
import { Injectable } from "@angular/core";
import { environment } from "./../../environments/environment";

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  signIn(userName: string, password: string) {
      const usernm = unescape(userName);
    return this.httpClient.post(environment.backendUrl + API_URL.AUTH.LOGIN, { userName, password } );
  }

}
