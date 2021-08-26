import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { Util } from 'src/app/utils/util';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private eventService: EventService, private router: Router){
    this.isLoggedIn$ = new Observable;
  }
  ngOnInit() {
    this.isLoggedIn$ = this.eventService.isLoggedIn;
  }

  onLogout() {
    Util.clearStorage();
    this.eventService.loggedIn.next(false);
    this.router.navigate(['']);
  }
}
