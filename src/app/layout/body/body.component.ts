import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PAGE } from 'src/app/constants/page';
import { EventService } from '../../shared/event.service';
import { Util } from '../../utils/util';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private eventService: EventService, private router: Router) {
    this.isLoggedIn$ = new Observable;
  }
  ngOnInit() {
    this.isLoggedIn$ = this.eventService.isLoggedIn;
  }

  onLogout() {
    Util.clearStorage();
    this.eventService.loggedIn.next(false);
    this.router.navigate([PAGE.LOGIN]);
  }
}
