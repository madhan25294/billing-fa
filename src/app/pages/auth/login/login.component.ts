import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LOCAL_STORAGE_KEY } from 'src/app/constants/local-storage';
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
  form: FormGroup  = this.fb.group({
    email: new FormControl(this.tempEmail, [Validators.required, Validators.email]),
    password: new FormControl(this.tempPassword, [Validators.required])
  });
  constructor(private router: Router,private fb: FormBuilder, private eventService: EventService) {
    
    this.eventService.loggedIn.next(false);
  }
  ngOnInit() {
    
    Util.clearStorage();
  }
   
  login() {
    Util.setStorage(LOCAL_STORAGE_KEY.TOKEN, 'abc');
    
    this.eventService.loggedIn.next(true);
    this.router.navigate(['./tools/files']);


  }
}

