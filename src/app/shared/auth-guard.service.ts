import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from "@angular/router";

import { Injectable } from "@angular/core";
import { LOCAL_STORAGE_KEY } from "../constants/local-storage";
import { Util } from '../utils/util';
import { UserService } from './user.service';
import { PAGE } from '../constants/page';

@Injectable()
export class AuthGuard {
  constructor(private router: Router, private userService: UserService) { }

  isLoggedIn(): boolean {
    return true;
    if (Util.getStorage(LOCAL_STORAGE_KEY.TOKEN)) {
      return true;
    } else {
      return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
    if (this.userService.isLoggedInActive()) {
      return true;
    } else {
      Util.clearStorage();
      this.router.navigate([PAGE.LOGIN]);
      return false;
    }
  }
}
