import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from "@angular/material/icon";
import { LOCAL_STORAGE_KEY } from './constants/local-storage';
import { EventService } from './shared/event.service';
import { Util } from './utils/util';
import { PAGE } from './constants/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private eventService: EventService, private iconRegistry: MatIconRegistry) {

    this.iconRegistry.setDefaultFontSetClass("material-icons-outlined");
  }

  ngOnInit() {
    const token = Util.getStorage(LOCAL_STORAGE_KEY.TOKEN);
    if (!token) {
      Util.clearStorage();
      this.router.navigate([PAGE.LOGIN]);
    } else {
      this.eventService.loggedIn.next(true);
    }
  }

}
