import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE_KEY } from 'src/app/constants/local-storage';
import { ConstantService } from 'src/app/services/constant.service';
import { EventService } from 'src/app/services/event.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { UserService } from 'src/app/services/user.service';
import { Util } from 'src/app/utils/util';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })

export class LoginComponent implements OnInit {
  
  public inputType = 'password';
  public visible = false;
  public userName:string='';
  public password:string='';
  // form: FormGroup;
  // public form: FormGroup  = this.fb.group({
  //   userName: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
  //   password: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)])
  // });

  
  
  constructor(private router: Router, 
    public constantService: ConstantService,
    private userService: UserService,
    private snackBService: SnackBarService,
    private eventService: EventService, private cd: ChangeDetectorRef,) {
      
    this.eventService.loggedIn.next(false);
  }
  ngOnInit() {
    
    Util.clearStorage();
    // this.form = this.fb.group({
    //   userName: ['', Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)],
    //   password: ['', Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]
    // });
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
     }


  onClickSignIn() {
    const usersName = this.userName.replace ("\\\\", "\\")
    this.userService.signIn(usersName, this.password).subscribe((res: any) => {
      Util.setStorage(LOCAL_STORAGE_KEY.TOKEN, res.token);
      this.eventService.loggedIn.next(true);
      this.snackBService.success('Login successfull');
      this.router.navigate(['./tools/files']);

     
    }, (error: HttpErrorResponse) => {
      if (error.status === 401) {
        this.snackBService.error('You have entered invalid credentials');
      } else {
        this.snackBService.error(error?.statusText || 'Internal Server Error');
      }
    });



  }
}

