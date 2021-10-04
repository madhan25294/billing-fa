import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { PAGE } from 'src/app/constants/page';
import { EventService } from 'src/app/shared/event.service';
import { Util } from 'src/app/utils/util';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  showSubmenu1: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  showSubSubMenu1: boolean = false;
  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  onLogout() {
    Util.clearStorage();
    this.eventService.loggedIn.next(false);
    this.router.navigate([PAGE.LOGIN]);
  }
}
