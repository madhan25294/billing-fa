import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LOCAL_STORAGE_KEY } from 'src/app/constants/local-storage';
import { ConstantService } from 'src/app/services/constant.service';
import { EventService } from 'src/app/services/event.service';
import { Util } from 'src/app/utils/util';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })

export class LoginComponent implements OnInit {
  
  public tempEmail = 'admin@firstam.com';
  public tempPassword = 'firstam';
  public inputType = 'password';
  public visible = false;

  form: FormGroup  = this.fb.group({
    email: new FormControl(this.tempEmail, [Validators.required, Validators.email]),
    password: new FormControl(this.tempPassword, [Validators.required])
  });
  
  constructor(private router: Router,private fb: FormBuilder, 
    public constantService: ConstantService,
    private eventService: EventService, private cd: ChangeDetectorRef,) {
    
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
  onClickSignIn() {
    Util.setStorage(LOCAL_STORAGE_KEY.TOKEN, 'abc');
    
    this.eventService.loggedIn.next(true);
    this.router.navigate(['./tools/files']);


  }
}

