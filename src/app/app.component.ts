import { Component } from '@angular/core';
import { PubsubService } from './services/pub-sub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Enterprise-Billing';
  constructor(private pubsubSvc: PubsubService) {
    
  }

}
