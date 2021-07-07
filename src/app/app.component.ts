import { Component } from '@angular/core';
import { PubsubService } from './services/pub-sub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Enterprise-Billing';
  showHeaderFooter: boolean;
  constructor(private pubsubSvc: PubsubService) {
    this.showHeaderFooter = false;
    this.updateTopnav();
  }

  updateTopnav() {
    this.pubsubSvc.subLoginStatus()
      .subscribe(result => {
        if (result === 'loggedIn') {
          this.showHeaderFooter = true;
        } else {
          this.showHeaderFooter = false;
        }
      }, err => {
      });
  }
}
