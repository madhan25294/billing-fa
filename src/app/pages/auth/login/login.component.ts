import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { PAGE } from '../../../constants/page';
import { LOCAL_STORAGE_KEY } from '../../../constants/local-storage';
import { ConstantService } from '../../../shared/constant.service';
import { EventService } from '../../../shared/event.service';
import { SnackBarService } from '../../../shared/snack-bar.service';
import { UserService } from '../../../shared/user.service';
import { Util } from '../../../utils/util';
import { AuthenticationToken } from '../auth-token';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public inputType = 'password';
  public visible = false;
  public userName: string = '';
  public password: string = '';
  public isClickedOnce: boolean;



  constructor(private router: Router,
    public constantService: ConstantService,
    private userService: UserService,
    private snackBService: SnackBarService,
    private eventService: EventService, private cd: ChangeDetectorRef) {
    this.isClickedOnce = false;
    this.eventService.loggedIn.next(false);
  }
  ngOnInit() {
    Util.clearStorage();
  }


  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  public getUserDetails() {
    return new Promise((resolve, reject) => {
      this.userService.getUserDetails().subscribe(data => {
        if (Util.isDefinedAndNotNull(data)) {
          Util.setStorage(LOCAL_STORAGE_KEY.USERNAME, data);
          resolve(data);
        }
      }, (error) => {
        reject(error);
      });
    })
  }

  onClickSignIn() {
    this.eventService.loggedIn.next(true);
    this.snackBService.success('Login successfull', 'close');
    this.router.navigate([PAGE.TOOLS_FILES]);
    return;
    this.userName = Util.trim(this.userName);
    if (!Util.isEmptyString(this.userName)) {
      {
        this.isClickedOnce = true;
        const usersName = this.userName.replace("\\\\", "\\");
        this.userService.signIn(usersName, this.password)
          .pipe(
            finalize(() => {
              this.isClickedOnce = false;
            })
          ).subscribe((res: AuthenticationToken) => {
            Util.setStorage(LOCAL_STORAGE_KEY.TOKEN, res.token);
            Util.setStorage(LOCAL_STORAGE_KEY.TOKENEXPIRATION, res.tokenExpiration);
            Promise.all([this.getUserDetails()]).then((data) => {
              this.eventService.loggedIn.next(true);
              this.snackBService.success('Login successfull', 'close');
              this.router.navigate([PAGE.TOOLS_FILES]);

            }).catch((error) => {
              this.snackBService.error('Error while getting user details');
            });

          },
            (error: HttpErrorResponse) => {
              if (error.status === 401) {
                this.snackBService.error(error.error || 'The user name or password is incorrect.');
              } else {
                this.snackBService.error(error ?.error || 'Internal Server Error for Login');
              }
            });

      }
    }
  }
}

