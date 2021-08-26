import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE_KEY } from './constants/local-storage';
import { EventService } from './services/event.service';
import { Util } from './utils/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private router: Router, private eventService: EventService) {
  }

  ngOnInit() {
    const token = Util.getStorage(LOCAL_STORAGE_KEY.TOKEN);
    if (!token) {
      Util.clearStorage();
      this.router.navigate(["./login"]);
    } else {
      this.eventService.loggedIn.next(true);
    }
  }

  
}
