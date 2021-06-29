import { Component, OnInit } from '@angular/core';
import { PubsubService } from '../services/pub-sub.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cartData: any;
  constructor(private pubsubSvc: PubsubService) {
  }

  ngOnInit() {
  }

}
