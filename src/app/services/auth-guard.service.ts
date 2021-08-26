import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from "@angular/router";

import { Injectable } from "@angular/core";
import { LOCAL_STORAGE_KEY } from "../constants/local-storage";
import { Util } from 'src/app/utils/util';

@Injectable()
export class AuthGuard {
  constructor(private router: Router) {}

  isLoggedIn():boolean {
    if (Util.getStorage(LOCAL_STORAGE_KEY.TOKEN)) {
      return true;
    } else {
      return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedIn()) {
      return true;
    } else {
      Util.clearStorage();
      this.router.navigate(['./login']);
      return false;
    }
  }
}
